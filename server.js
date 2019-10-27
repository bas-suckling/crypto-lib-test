const express = require('express')
const hbs = require('express-handlebars')
const server = express()
// const messageData = require('./message.json')
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
        plainTextMessage: "",
        encryptedMessage: ""
    }
    res.render(encryption, data)
})

server.get('/decryption-demo', (req, res) => {
  const decryption = './decryption'
  data = {
    iv: '1234567812345678',
    key: '12345678123456781234567812345678',
    plainTextMessage: '',
    encryptedMessage: ''
  }
  res.render(decryption, data)
})

  

server.post('/encryption-demo', (req, res) => {
    const encryption = './encryption'
    let plainTextMessage = req.body.plainText
    let encryptedMessage = aes_256.encrypt(plainTextMessage)
   
    const updatedData = {
        iv: '1234567812345678',
        key: '12345678123456781234567812345678',
        plainTextMessage: plainTextMessage,
        encryptedMessage: encryptedMessage.encryptedData        
    }
    res.render(encryption, updatedData)
})

server.post('/decryption-demo', (req, res) => {
  const decryption = './decryption'
  let encryptedMessage = req.body.encryptedText
  let plainTextMessage = aes_256.decrypt(encryptedMessage)

  const updatedData = {
    iv: '1234567812345678',
    key: '12345678123456781234567812345678',
    plainTextMessage: plainTextMessage,
    encryptedMessage: encryptedMessage
  }
  res.render(decryption, updatedData)
})


server.get('/key-exchange', (req, res) => {
    const keyExchange = './keyExchange'
    res.render(keyExchange)
})











module.exports = server;