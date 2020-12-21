const db = require('../models')
// const article = require('../models/article')
const { Article, ArticleImage } = db

const { v4: uuidv4 } = require('uuid');



let articleController = {
  frontGetAllArticles: (req, res) => {

    // console.log('uuidv4()', uuidv4())

    const category = req.params.category
    Article.findAll({
      where: {
        category: category
      },
      include: [{ model: ArticleImage }]
    }).then(articles => {
      return res.json(articles)
    })


  }
}


module.exports = articleController