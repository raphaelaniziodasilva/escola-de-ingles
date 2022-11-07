const database = require("../models")

class TurmaController {
    static async pegaTodasAsTurmas(req, res) {
        try {
          const todasAsTurmas = await database.Turmas.findAll()
          return res.status(200).json(todasAsTurmas)
        } catch (error) {
          return res.status(500).json(error.message);
        }
    }

    static async pegarUmaTurma(req, res) {
        const {id} = req.params
        try {
            const umaTurma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaTurma)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaTurma(req, res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarTurma(req, res) {
        const {id} = req.params
        const novasInfo = req.body
        try {
            await database.Turmas.update(novasInfo, {where: {id: Number(id)}})
            const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(turmaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message);            
        }
    }

    static async deletarTurma(req, res) {
        const {id} = req.params
        try {
            await database.Turmas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`})
        } catch (error) {
           return res.status(500).json(error.message);              
        }
    }

    // restaura turma que foi ocultado pelo soft delete
    static async restauraTurma(req, res) {
        const { id } = req.params
        try {
          await database.Turmas.restore( {where: { id: Number(id) } } )
          return res.status(200).json({ mensagem: `id ${id} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
      }
}

module.exports = TurmaController