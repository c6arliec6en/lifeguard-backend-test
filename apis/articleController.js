const db = require('../models')
// const article = require('../models/article')
const { Article, Image } = db


let articleController = {
  frontGetAllArticles: (req, res) => {
    const category = req.params.category
    Article.findAll({
      where: {
        category: category
      },
      include: [{ model: Image }]
    }).then(articles => {
      return res.json(articles)
    })
  }
}


module.exports = articleController