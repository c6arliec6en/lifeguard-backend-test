const db = require('../models')
const { Article, ArticleImage } = db

let articleController = {
  frontGetAllArticles: (req, res) => {

    const category = req.params.category
    Article.findAll({
      where: {
        category: category
      },
      include: [{
        model: ArticleImage
      }]
    }).then(articles => {
      return res.json(articles)
    })

  }
}


module.exports = articleController