module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pessoas', [
     {
       nome: "Meliodas",
       ativo: true,
       email: "dragon@gmail.com", 
       role: "estudante",
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        nome: "Escanor",
        ativo: true,
        email: "sunshine@gmail.com",
        role: "estudante",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "Ban",
        ativo: true,
        email: "fox@gmail.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: "King",
        ativo: true,
        email: "king@gmail.com",
        role: "docente",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
