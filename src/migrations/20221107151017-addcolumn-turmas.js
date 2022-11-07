// nesse arquivo de migration vamos inserir uma nova coluna deletedAt para poder ocultar as informações no banco de dados que o usuario deletou 
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Turmas', 'deletedAt', {
        allowNull: true, // o campo vai ser nulo
        type: Sequelize.DATE // no MYSQL vai converter para date time
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Turmas', 'deletedAt');
  }
};