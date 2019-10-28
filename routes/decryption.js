const express = require('express')
const router = express.Router()
const cryptoFunctions = require('../cryptoFunctions')

router.get('/', (req, res) => {
    data = {
      iv: '1234567812345678',
      key: '',
      plainTextMessage: '',
      encryptedMessage: ''
    }
    res.render('decryption', data)
  })

router.post('/', (req, res) => {
    let key = req.body.key
    let hashKey = cryptoFunctions.hash(key) 
    let encryptedMessage = req.body.encryptedText
    let plainTextMessage = cryptoFunctions.decrypt(encryptedMessage, hashKey)

    const updatedData = {
        iv: '1234567812345678',
        key: key,
        hashKey: hashKey,
        plainTextMessage: plainTextMessage,
        encryptedMessage: encryptedMessage
    }
    res.render('decryption', updatedData)
})
  
module.exports = router;