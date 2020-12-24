const express = require('express')
const router = express.Router()
const articleController = require('../apis/articleController')
// const userController = require('../apis/userController')
// const multer = require('multer')
// const upload = multer({ dest: 'temp/' })
// const passport = require('../config/passport')

// const authenticated = passport.authenticate('jwt', { session: false })

//Front stage
router.get('/article/:category', articleController.frontGetAllArticles)
router.get('/article/:category/:article_id', articleController.frontGetArticle)


module.exports = router
