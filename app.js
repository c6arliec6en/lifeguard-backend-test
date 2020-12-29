const express = require('express')
const app = express()
const db = require('./models')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const articleRouter = require('./routes/article')
const fileRouter = require('./routes/file')
const videoRouter = require('./routes/video')
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/', articleRouter)
app.use('/file', fileRouter)
app.use('/videos', videoRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})