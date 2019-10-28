const express = require('express')
const router = express.Router()
const aes_256 = require('../aes-256')

router.get('/', (req, res) => {
    data = {
      iv: '1234567812345678',
      key: '12345678123456781234567812345678',
      plainTextMessage: '',
      encryptedMessage: ''
    }
    res.render('decryption', data)
  })

router.post('/', (req, res) => {
    let secretKey = req.body.secretMessage
    let secretKeyHash = ''
    let encryptedMessage = req.body.encryptedText
    let plainTextMessage = aes_256.decrypt(encryptedMessage)

    const updatedData = {
        iv: '1234567812345678',
        key: '12345678123456781234567812345678',
        plainTextMessage: plainTextMessage,
        encryptedMessage: encryptedMessage
    }
    res.render('decryption', updatedData)
})
  
module.exports = router;