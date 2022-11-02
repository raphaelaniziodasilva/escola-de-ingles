// importando o models pessoas para se conectar com o controlador
const database = require("../models")

class PessoaController {
    // listar todas as pessoas
    static async pegarTodasAsPessoas(req, res) {
        try {
            const TodasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(TodasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PessoaController