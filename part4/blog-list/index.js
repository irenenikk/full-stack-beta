const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

const config = require('./utils/config')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogsRouter)

mongoose.connection.openUri(config.mongoUrl)
mongoose.Promise = global.Promise

const PORT = config.port
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}
