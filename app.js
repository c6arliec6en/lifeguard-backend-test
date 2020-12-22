const express = require('express')
const app = express()
const db = require('./models')
const articleRouter = require('./routes/article')
const port = 3000

app.use('/', articleRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})