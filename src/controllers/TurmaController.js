const database = require("../models")
// importando a lista dos operadores do sequelize Op para fazer o filtro: a lista por data
const { Op } = require("sequelize")

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

    // listando as turmas por intervalo de data
    static async listandoTurmasPorIntervaloDeDatas(req, res) {
        // vamos precisar da data inicial e data final vamos pegar as datas via query string
        const {data_inicial, data_final} = req.query
        const where = {} // vai para dentro do findAll como parametro

        // verificando se existe a data_inicial ou a data_final se existir vamos jogar no objeto where que esta vazio e vamos criar uma propriedade data_inicio, data_inicio e o nome da coluna, vamos passar o valor de data inicio a um outro objeto vazio se não tiver nada vai ser passado o null
        //                                 coluna da tabela      
        data_inicial || data_final ? where.data_inicio = {} : null

        // Agora vamos levar os dados que vamos receber para dentro do objeto
        // se data inicial existir         >=                  se não existir
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null

        // se data final existir         <=
        data_final ? where.data_inicio[Op.lte] = data_final : null

        try {
            const todasAsTurmas = await database.Turmas.findAll({ where })
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message);
        }
        // passando o intervalo de datas inicial e a data final no endpoint via query string
        //http://localhost:3000/turmas?data_inicial=2005-01-01&data_final=2022-03-10
    }
}

module.exports = TurmaController