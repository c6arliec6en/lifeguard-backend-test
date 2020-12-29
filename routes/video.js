const express = require('express')
const router = express.Router()
const videoController = require('../apis/videoController')
// const userController = require('../apis/userController')
// const multer = require('multer')
// const upload = multer({ dest: 'temp/' })
// const passport = require('../config/passport')

// const authenticated = passport.authenticate('jwt', { session: false })

//Front stage
router.get('/', videoController.getAllVideos)

module.exports = router