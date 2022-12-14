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
            const idExistente = await database.Pessoas.findOne({where: {id: Number(id)}})
            if(!idExistente) {
                return res.status(404).json("Id não cadastrado!");
            }            
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
        const {email} = req.body
        const emailExist = await database.Pessoas.findOne({ where: { email: String(email)}})
        if(emailExist) {
            return res.status(200).json("Email já cadastrado!");
        }
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
        const idExistente = await database.Pessoas.findOne({where: {id: Number(id)}})
        if(!idExistente) {
            return res.status(404).json("Id não cadastrado!");
        }  
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
        const idExistente = await database.Pessoas.findOne({where: {id: Number(id)}})
        if(!idExistente) {
            return res.status(404).json("Id não cadastrado!");
        }  
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }

    // restaura registro - pessoa que foi ocultado pelo soft delete
    static async restauraPessoa(req, res) {
        // pegando o id da pessoa que foi excluida pelo usuario ocultada para ser restaurada
        const {id} = req.params
        try {
            await database.Pessoas.restore({where: {id: Number(id)}})
            const pessoaRestaurada = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} restaurado com sucesso`})         
        } catch (error) {
            return res.status(500).json(error.message)            
        }
    }
    
    // listando uma matricula: as matriculas sempre vão estar vinculada a um aluno existente no database 
    static async pegaUmaMatricula(req, res) {
        // Para listar uma matricula precisamos do id estudante e o id da matricula
        const {estudanteId, matriculaId,} = req.params
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
        // para pegar uma matricula no endPoint vamos passar o id do estudante e o id da matricula
        // http://localhost:3000/pessoas/estudanteId/matriculas/matriculaId
    }

    // criando uma matricula. As matriculas estão relacionadas a um id de pessoa
    static async criaMatricula(req, res) {
        // Para criar uma matricula eu vou precisar receber o id de um estudante existente.
        const {estudanteId} = req.params
        // vamos fazer o espreed com corpo da requisição e o número de id do estudante
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
        // vamos criar uma nova matricula. Precisamos do estudante que ja esta cadastrado no database para assim poder realizar uma nova matricula com esse estudante
        // http://localhost:3000/pessoas/estudanteId/matricula
    }

    // Atualizar matricula
    static async atualizaMatricula(req, res) {
        // Para atualizar uma matricula precisamos do id estudante e o id da matricula
        const {estudanteId, matriculaId,} = req.params
        const novasInfo = req.body
        try {
            // primeiro vai atualizar as informações
            await database.Matriculas.update(novasInfo, {
                where: {
                   id: Number(matriculaId),
                   estudante_id: Number(estudanteId)
                }})
            // segundo vai retornar as informações atualizadas
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
        // Para atualizar a matricula no endPoint vamos passar o id do estudante e o id da matricula e depois as informações a serem atualizadas
        // http://localhost:3000/pessoas/estudanteId/matriculas/matriculaId
    }

    // Deletar matricula
    static async deletaMatricula(req, res) {
        // Para deletar uma matricula precisamos do id estudante e o id da matricula
        const {estudanteId, matriculaId,} = req.params
        try {
            await database.Matriculas.destroy({where: {id: Number(matriculaId)}})
            return res.status(200).json({mensagem: `id ${matriculaId} deletado com sucesso`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // restaura matricula que foi ocultado pelo soft delete
    static async restauraMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
          await database.Matriculas.restore({
            where: {
              id: Number(matriculaId),
              estudante_id: Number(estudanteId)
            }
          })
          return res.status(200).json({ mensagem: `id ${matriculaId} restaurado`})
        } catch (error) {
          return res.status(500).json(error.message)
        }
    }

    /*
     listando todas as matriculas de uma pessoa
     static async pegaMatriculas(req, res) {
        const {estudanteId} = req.params
        try {
            const matriculasLista = await database.Matriculas.findAll({where: {
                estudante_id: Number(estudanteId)
            }})
            return res.status(200).json(matriculasLista)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
        http://localhost:3000/pessoas/estudanteId/matriculas
        }
    */

    // consultar todas as matrículas confirmadas referentes a estudante X usando o scope de associação no models pessoas no relacionamento de pessoas com matriculas
    static async listaMatriculas(req, res) {
        const {estudanteId} = req.params
        try {
            const pessoa = await database.Pessoas.findOne({where: {id: Number(estudanteId)}})
            const matriculas = await pessoa.getAulasMatriculadas()
            return res.status(200).json(matriculas)
        } catch (error) {
            return res.status(500).json(error.message)            
        }
        // http://localhost:3000/pessoas/estudanteId/matriculas
    }

    // contando quantas matriculas tem por turmas
    static async  contandoMatriculasPorturmas(req, res) {
        const {turmaId} = req.params
        try {
            const todasAsMatriculas = await database.Matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    // contando so as matriculas confirmada
                    status: "confirmado"
                },
                // ordenando os resultados da coluna em orde decrescente 
                // order: [["estudante_id", "DESC"]]

            })
            res.status(200).json(todasAsMatriculas)            
        } catch (error) {
            return res.status(500).json(error.message)             
        }
    }

    // contando quantas turmas existem
    static async  pegaTurmasLotadas(req, res) {
        try {
            const turmasLotadas = await database.Matriculas.findAndCountAll({
                where: {
                    status: "confirmado"
                },
                attributes: ["turma_id"],
                group: ["turma_id"],
            })
            res.status(200).json(turmasLotadas)            
        } catch (error) {
            return res.status(500).json(error.message)             
        }
    }

    // quando o cadastro do estudante for desativado, todas as matrículas relativas a este estudante automaticamente passassem a ser “canceladas”.
    static async cancelaPessoa(req, res) {
        // passando como parametro o id do estudante porque a partir do cancelamneto do estudante que eu vou sair da tabela pessoas e ir percorrer a tabela matriculas procurando o estudant_id 
        const {estudanteId} = req.params
        try {

            // Transações servem para garantir a integridade dos dados em operações que acese mais de uma tabela ou que faça atualizações em varias linhas de uma tabela, então caso aconteça qualquer erro nesse processo ou erro de banco e a gente tem uma falha em qualquer parte da operação nehum dado será salva ou atulizado no banco de dados

            // vamos fazer uma transação que vai impedir qualquer erro no banco vai impedir alterações parcias, desnecessária  
            database.sequelize.transaction(async transacao => {
            // vamos ter que acessar duas tabelas e atraves do seus modelos fazer alterações nelas fazer os updates
            await database.Pessoas // tabela pessoas
            // vamos modificar a coluna de ativo true para ativo false, no where vamos passar o id da tabela pessoas e vamos receber o valor de estudanteId
            .update({ativo: false}, {where: {id: Number(estudanteId)}}, { transaction: transacao})

            await database.Matriculas // tabela matriculas
            // vamos modificar a coluna de status confirmado para status cancelado, no where e onde vamos alterar vamos alterar a coluna estudante_id porque e a coluna da tabela matriculas que relaciona com id da tabela pessoas e vamos receber o valor de estudanteId
            .update({status: "cancelado"}, {where: {estudante_id: Number(estudanteId)}}, {transaction: transacao})

            // os metodos update eles não retornam json eles retornam 0 ou 1 então vamos passar uma menssagem
            res.status(200).json({message: `Matrícula referente a estudante ${estudanteId} canceladas`})
           })            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController