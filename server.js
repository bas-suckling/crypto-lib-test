const express = require('express')
const hbs = require('express-handlebars')
const server = express()

const encryption = require('./routes/encryption')
const decryption = require('./routes/decryption')


server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

  server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public')) // allow access to public folder
server.use(express.urlencoded({extended: false})) //need clarification about this
server.use('/encryption', encryption)
server.use('/decryption', decryption)

server.get('/', (req, res) => {
    const home = './home.hbs'
    res.render(home)
})

server.get('/encryption', (req, res) => {
    res.send(encryption)
})

server.get('/decryption', (req, res) => {
  res.send(decryption)
})

server.get('/key-exchange', (req, res) => {
    const keyExchange = './keyExchange'
    res.render(keyExchange)
})

module.exports = server;