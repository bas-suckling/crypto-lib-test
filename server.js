const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const crypto = require('crypto')

server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public')) // allow access to public folder
server.use(express.urlencoded({extended: false})) //need clarification about this

server.get('/', (req, res) => {
    const home = './home.hbs'
    res.render(home)
})

server.get('/aes-256', (req, res) => {
    res.sendFile(__dirname + '/pages/AES-256.html')
})

module.exports = server;