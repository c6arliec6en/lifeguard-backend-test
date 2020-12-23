const express = require('express')
const app = express()
const db = require('./models')
const articleRouter = require('./routes/article')
const fileRouter = require('./routes/file')
const port = 3000

app.use('/', articleRouter)
app.use('/file', fileRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})