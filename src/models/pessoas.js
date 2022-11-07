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
        foreignKey: "estudante_id"
      })
    }
  }
  Pessoas.init({
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
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


    modelName: 'Pessoas',
  });
  return Pessoas;
};