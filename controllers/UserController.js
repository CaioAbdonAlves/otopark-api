const bcrypt = require('bcryptjs');
const User = require('../models/User.js');
const Parking = require('../models/Parking.js');
const { default: mongoose } = require('mongoose');

module.exports = class UserController {
    static async register(req, res) {
        const { type, name, email, password, confirmpassword, parking  } = req.body;

        if(!type) {
            res.status(422).json({message: "O tipo do usuário é obrigatório!"});
            return;
        }

        if(!name) {
            res.status(422).json({message: "O nome do usuário é obrigatório!"});
            return;
        }

        if(!email) {
            res.status(422).json({message: "O e-mail do usuário é obrigatório!"});
            return;
        }

        if(!password) {
            res.status(422).json({message: "A senha do usuário é obrigatória!"});
            return;
        }

        if(!confirmpassword) {
            res.status(422).json({message: "A confirmação de senha é obrigatória!"});
            return;
        }

        if(password !== confirmpassword) {
            res.status(422).json({message: "As senhas não coincidem!"});
            return;
        }

        const userExists = await User.findOne({email: email});

        if(userExists) {
            res.status(422).json({message: "Já existe um usuário cadastrado com este e-mail!"});
            return;
        }

        const salt = bcrypt.genSaltSync(15);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User ({
            type,
            name,
            email,
            password: hashedPassword
        });

        try {
            const newUser = await user.save();

            newUser.type == "Owner" && res.json({message: "Usuário cadastrado com sucesso!", user: newUser});

            await Parking.updateOne(
                {_id: new mongoose.Types.ObjectId(parking)},
                {
                    $push: {
                        employee: new mongoose.Types.ObjectId(newUser._id),
                    },
                }
            );
            
            res.status(200).json({message: "Funcionário cadastrado com sucesso!", user: newUser})
        } catch(error) {
            res.status(500).json({message: error});
            return;
        }
    }
}