const jwt = require('jsonwebtoken');

const createUserToken = async (req, res, user) => {
    const token = jwt.sign({
        id: user._id,
        type: user.type,
        name: user.name
    }, process.env.SECRET);

    res.status(200).json({
        message: "Você está autenticado",
        token: token,
        userId: user._id
    })
}

module.exports = createUserToken;