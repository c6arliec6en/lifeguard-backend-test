const db = require('../models')
const fs = require('fs')
const path = require('path')
const { File } = db

let fileController = {
  downloadFile: async (req, res) => {

    const file = await File.findOne({ where: { fileId: req.params.file_id } })
    const data = path.join(__dirname, '..', file.url)

    let binaryData = fs.readFileSync(data)
    let base64Sring = new Buffer.from(binaryData).toString("base64")
    res.json(base64Sring)
  },
  getAllFiles: (req, res) => {
    File.findAll({ where: { category: req.params.category } }).then(files => {
      const data = files.map(f => {
        return { fileId: f.fileId, title: f.title }
      })
      res.json(data)
    })
  }
}


module.exports = fileController