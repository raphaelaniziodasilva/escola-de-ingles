'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // fazendo o relacionamento entre modelos: tabelas
       Niveis.hasMany(models.Turmas, {
        foreignKey: "nivel_id"
      })
    }
  }
  Niveis.init({
    descr_nivel: {
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
    modelName: 'Niveis',
  });
  return Niveis;
};