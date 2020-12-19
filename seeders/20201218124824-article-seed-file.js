'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles',
      Array.from({ length: 5 }).map((item, index) =>
        ({
          id: index + 1,
          category: 'news',
          title: `Text title ${index + 1}`,
          content: `<html>Hello world ${index + 1}</html>`,
          sort: index + 1,
          show: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      ), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
