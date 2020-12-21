'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ArticleImages', {
      articleImageId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      ArticleId: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.TEXT
      },
      mainImage: {
        type: Sequelize.BOOLEAN
      },
      show: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ArticleImages');
  }
};