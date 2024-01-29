const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Conectado ao banco de dados!");
    } catch (error) {
        console.log(`Ocorreu um erro ao conectar no banco de dados: ${error}`);
    }
}

main();

module.exports = mongoose;