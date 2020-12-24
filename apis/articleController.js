const db = require('../models')
const { Article, ArticleImage } = db
const path = require('path')
const fs = require('fs')

let articleController = {
  frontGetAllArticles: (req, res) => {

    const category = req.params.category
    Article.findAll({
      where: {
        category: category
      },
      attributes: ['articleId', 'title', 'content'],
      include: [{
        model: ArticleImage,
        where: { mainImage: true },
        attributes: ['articleImageId', 'url']
      }]
    }).then(articles => {

      const articleWithPicture = articles.map(a => {

        const pic = path.join(__dirname, '..', a.ArticleImages[0].url)
        let binaryData = fs.readFileSync(pic)
        let base64Sring = new Buffer.from(binaryData).toString("base64")

        return {
          articleId: a.articleId,
          title: a.title,
          content: a.content,
          mainImage: base64Sring
        }
      })

      return res.json(articleWithPicture)
    })
  },

  frontGetArticle: (req, res) => {
    Article.findOne({
      where: { category: req.params.category, articleId: req.params.article_id },
      attributes: ['articleId', 'title', 'content'],
      include: [{
        model: ArticleImage,
        attributes: ['articleImageId', 'url', 'mainImage']
      }]
    }).then(article => {

      const pics = article.ArticleImages.map(image => {

        const pic = path.join(__dirname, '..', image.url)
        let binaryData = fs.readFileSync(pic)
        let base64Sring = new Buffer.from(binaryData).toString("base64")
        return {
          articleImageId: image.articleImageId,
          main: image.mainImage,
          image: base64Sring
        }
      })

      return res.json({ articleId: article.articleId, title: article.title, content: article.content, images: pics })
    })
  }
}


module.exports = articleController