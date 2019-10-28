const express = require('express')
const router = express.Router()
const aes_256 = require('../aes-256')


router.get('/', (req, res) => {
    data = {
        iv: '1234567812345678',
        key: '12345678123456781234567812345678',
        plainTextMessage: "",
        encryptedMessage: ""
    }
    res.render('encryption', data)
})

router.post('/', (req, res) => {
    let plainTextMessage = req.body.plainText
    let encryptedMessage = aes_256.encrypt(plainTextMessage)
   
    const updatedData = {
        iv: '1234567812345678',
        key: '12345678123456781234567812345678',
        plainTextMessage: plainTextMessage,
        encryptedMessage: encryptedMessage.encryptedData        
    }
    res.render('encryption', updatedData)
})

module.exports = router;