'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // fazendo o relacionamento entre modelos: tabelas
      Matriculas.belongsTo(models.Pessoas, {
        foreignKey: "estudante_id"
      })
      Matriculas.belongsTo(models.Turmas, {
        foreignKey: "turma_id"
      })
    }
  }
  Matriculas.init({
    status: {
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
    paranoid: true,
    modelName: 'Matriculas',
  });
  return Matriculas;
};