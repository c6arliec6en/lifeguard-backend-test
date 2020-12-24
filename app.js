const express = require('express')
const app = express()
const db = require('./models')
const articleRouter = require('./routes/article')
const fileRouter = require('./routes/file')
const videoRouter = require('./routes/video')
const port = 3000

app.use('/', articleRouter)
app.use('/file', fileRouter)
app.use('/videos', videoRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})