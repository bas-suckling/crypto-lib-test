const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const crypto = require('crypto')
const messageData = require('./message.json')
const aes_256 = require('./aes-256')


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

server.get('/encryption-demo', (req, res) => {
    const encryption = './encryption'
    data = {
        iv: '1234567812345678',
        key: '12345678123456781234567812345678',
        plainTextMessage: "This is a test message to be encrypted",
        encryptedMessage: ""
    }
    res.render(encryption, data)
})

server.post('/encryption-demo', (req, res) => {
    const encryption = './encryption'
    let plainTextMessage = req.body.plainText
    let encryptedMessage = aes_256.encrypt(plainTextMessage)
   

    const updatedData = {
        iv: '1234567812345678',
        key: '12345678123456781234567812345678',
        plainTextMessage: plainTextMessage,
        encryptedMessage: encryptedMessage        
    }
    res.render(encryption, updatedData)
})





// server.get('/key-exchange', (req, res) => {
//     const key_exchange = './key-exchange'
//     res.render(key_exchange)
// })









module.exports = server;