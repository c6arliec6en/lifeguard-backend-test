const express = require('express')
const router = express.Router()
const fileController = require('../apis/fileController')
// const userController = require('../apis/userController')
// const multer = require('multer')
// const upload = multer({ dest: 'temp/' })
// const passport = require('../config/passport')

// const authenticated = passport.authenticate('jwt', { session: false })

//Front stage
router.get('/:file_id', fileController.downloadFile)

module.exports = router