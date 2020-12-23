
'use strict';

const { v4: uuidv4 } = require('uuid')
const db = require('../models')
const { Article } = db

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let articleIdArray = []
    const articles = await Article.findAll({ where: { category: 'news' } })
    articles.forEach(a => [
      articleIdArray.push(a.articleId)
    ])

    return queryInterface.bulkInsert('ArticleImages',
      Array.from({ length: 5 }).map((item, index) =>
        ({
          articleImageId: uuidv4(),
          ArticleId: articleIdArray[index],
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
