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
    const encryption = './encryption'
    data = {
        key: '12345678123456781234567812345678',
        plainTextMessage: "",
        encryptedMessage: ""
    }
    res.render(encryption, data)
})

module.exports = server;