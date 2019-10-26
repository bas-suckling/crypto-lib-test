const express = require('express')
const hbs = require('express-handlebars')

const server = express()

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public')) // allow access to public folder
server.use(express.urlencoded({extended: false})) //need clarification about this

server.get('/', (req, res) => {
    res.send('<h1>Encrypto!</h1>')
})

server.get('/aes-128', (req, res) => {
    res.sendFile(__dirname + '/pages/AES-128.html')
})

module.exports = server;