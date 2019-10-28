const express = require('express')
const router = express.Router()
const cryptoFunctions = require('../cryptoFunctions')


router.get('/', (req, res) => {
    data = {
        iv: '1234567812345678',
        key: '',
        plainTextMessage: "",
        encryptedMessage: ""
    }
    res.render('encryption', data)
})

router.post('/', (req, res) => {
    let plainTextMessage = req.body.plainText;
    let key = req.body.key;
    let hashKey = cryptoFunctions.hash(key)
    let encryptedMessage = cryptoFunctions.encrypt(plainTextMessage, hashKey)
   
    const updatedData = {
        iv: '1234567812345678',
        hashKey: hashKey,
        key: key,
        plainTextMessage: plainTextMessage,
        encryptedMessage: encryptedMessage.encryptedData        
    }
    res.render('encryption', updatedData)
})

module.exports = router;