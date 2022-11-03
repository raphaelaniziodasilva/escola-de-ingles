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

    // lista uma pessoas especifica pelo id dela
    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id) // convertendo o id para number para não ter nenhum problema 
                }
            })
            return res.status(200).json(umaPessoa)             
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    // criando um rgistro novo - adicionando pessoa
    static async criaPessoa(req, res) {
        // passando os dados da pessoa pelo corpo da requisição
        const novaPessoa = req.body
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    // Atualizar registro - pessoa
    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfo = req.body
        try {
            // primeiro vai atualizar as informações
            await database.Pessoas.update(novasInfo, {where: {id: Number(id)}})
            // segundo vai retornar as informações atualizadas
            const pessoaAtualizada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Deletar registro - pessoa
    static async deletaPessoa(req, res) {
        const { id } = req.params
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }


}

module.exports = PessoaController