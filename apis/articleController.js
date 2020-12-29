const db = require('../models')
const { Article, ArticleImage } = db
const path = require('path')
const fs = require('fs')

let articleController = {
  frontGetAllArticles: async (req, res) => {
    try {
      const articles = await Article.findAll({
        where: {
          category: req.params.category
        },
        attributes: ['articleId', 'title', 'content'],
        include: [{
          model: ArticleImage,
          where: { mainImage: true },
          attributes: ['articleImageId', 'url']
        }]
      })

      const articleWithPicture = articles.map(a => {

        const pic = path.join(__dirname, '..', a.ArticleImages[0].url)
        let binaryData = fs.readFileSync(pic)
        let base64String = new Buffer.from(binaryData).toString("base64")

        return {
          articleId: a.articleId,
          title: a.title,
          content: a.content,
          mainImage: base64String
        }
      })

      return res.json(articleWithPicture)
    } catch (err) {
      console.log(err)
    }
  },

  frontGetArticle: async (req, res) => {
    try {
      const article = await Article.findOne({
        where: { category: req.params.category, articleId: req.params.articleId },
        attributes: ['articleId', 'title', 'content'],
        include: [{
          model: ArticleImage,
          attributes: ['articleImageId', 'url', 'mainImage']
        }]
      })

      const pics = article.ArticleImages.map(image => {

        const pic = path.join(__dirname, '..', image.url)
        let binaryData = fs.readFileSync(pic)
        let base64String = new Buffer.from(binaryData).toString("base64")
        return {
          articleImageId: image.articleImageId,
          main: image.mainImage,
          image: base64String
        }
      })

      return res.json({ articleId: article.articleId, title: article.title, content: article.content, images: pics })
    } catch (err) {
      console.log(err)
    }

  }
}


module.exports = articleController