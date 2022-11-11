'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // fazendo o relacionamento entre modelos: tabelas
      Pessoas.hasMany(models.Turmas, {
        foreignKey: "docente_id"
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: "estudante_id",
        // usando o scope de associação para pegar todas as matriculas que esta confirmada e cancelada de uma determinada pessoa.
        // Use // no scope para trazer a lista das matriculas cancelada tbm

        // scope: {status: "confirmado"}, // so vai trazer as matriculas que estão confirmadas
        as: "aulasMatriculadas"
      })
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidar: function(dado) {
          if(dado.length < 3) throw new Error("O campo nome deve ter mais de três caracteres")
        }
      }
    },
    ativo: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: "O campo não pode ser vazio"
        }
      }
    },
    // Validação de email caso seja enviado o formato errado sem o @----.com
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "dado do tipo -email invalido"
        }
      },
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "O campo não pode ser vazio"
        }
      }
    }
  }, {
    sequelize,
    /* 
     O paranoid vai fazer uma exclusão suave ou seja ela não vai excluir definitivamente os   dados do banco de dados ele meio que vai esconder ocultar esses dados que foram deletados 

     Para o cliente os dados foram apagados porém os dados não foram excluidos eles foram ocultados

     Precisamos colocar o paranoid em todas as tabelas que desejarmos

     Equanto o valor de paranoid for true a gente garante que nenhum registro da tabela vai ser deletado definitido 
    */
    paranoid: true,
    /*
     Precisamos criar uma coluna na tabela chamada deletedAt para implementar o soft delete: exclusão suave = paranoid que vai colocar um timestamp

     Vamos precisar adicionar uma coluna chamada deletedAt em cada uma das nossas tabelas do banco e para isso vamos utilizar as migrations para criar essa coluna em cada tabela

     Vamos criar um arquivo novo na pasta de migrations para adicionar essa coluna deletedAt o nome do arquivo vai ser a data de hoje em seguida o nome addcollumn-eo-nome-da-pasta
    */

    /*
     Agora por padrão vamos exibir somente os usuarios que estão ativos no banco de dados ou seja quando eu for listar todos os usuarios no front ou postman so vai aparecer os usaurios que estiverem ativos

     Todo o get que a gente faça atraves do metodo do sequelize findAll() seja feita a partir de um determinado scopo

     Vamos passar o scopo padrão 
    */
   defaultScope: {
    // O que a gente quer que aconteça no get padrão,
    where: {
      // eu vou querer que todos os selects eles so retornem as pessoas que estejam ativas 
      ativo: true}
   },   
    modelName: 'Pessoas',
  });
  return Pessoas;
};