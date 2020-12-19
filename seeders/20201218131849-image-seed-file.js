'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images',
      Array.from({ length: 5 }).map((item, index) =>
        ({
          id: index + 1,
          ArticleId: index + 1,
          url: 'https://fakeimg.pl/300/',
          mainImage: true,
          show: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      ), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
