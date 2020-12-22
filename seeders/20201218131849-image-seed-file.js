
'use strict';

const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ArticleImages',
      Array.from({ length: 5 }).map((item, index) =>
        ({
          articleImageId: uuidv4(),
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
    return queryInterface.bulkDelete('ArticleImages', null, {});
  }
};
