const database = require("../models")

class NivelController {
    static async pegarTodosNiveis(req, res) {
        try {
            const TodosNiveis = await database.Niveis.findAll()
            return res.status(200).json(TodosNiveis)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    static async pegarUmNivel(req, res) {
        const {id} = req.params
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarNivel(req, res) {
        const {id} = req.params
        const novasInfo = req.body
        try {
            await database.Niveis.update(novasInfo, {where: {id: Number(id)}})
            const nivelAtualizado = await database.Niveis.findOne({where: {id: Number(id)}})
            return res.status(200).json(nivelAtualizado)
        } catch (error) {
            return res.status(500).json(error.message);            
        }
    }

    static async deletarNivel(req, res) {
        const {id} = req.params
        try {
            await database.Niveis.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`})
        } catch (error) {
           return res.status(500).json(error.message);              
        }
    }
}

module.exports = NivelController