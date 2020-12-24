const db = require('../models')
const fs = require('fs')
const path = require('path')
const { Video } = db

let videoController = {

  getAllVideos: (req, res) => {
    Video.findAll().then(videos => {
      res.json(videos)
    })
  }
}

module.exports = videoController