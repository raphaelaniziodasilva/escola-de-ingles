module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [
     {
       data_inicio: "2020-07-01",
       nivel_id: 1,
       docente_id: 3,                                       
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        data_inicio: "2021-05-07",
        nivel_id: 2,
        docente_id: 4,                                       
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-07-10",
        nivel_id: 3,
        docente_id: 3,                                       
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {});
  }
};
