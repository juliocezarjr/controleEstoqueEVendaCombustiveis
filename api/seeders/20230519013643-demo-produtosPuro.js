'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('ProdutosPuros', [{
       nome: 'gaa',
       ativo: true,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      nome: 'etanolAnidro',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'as10',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'as500',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'b100',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'etanolHidratado',
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
