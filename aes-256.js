const crypto = require('crypto');


let key = '12345678123456781234567812345678'
let iv = '1234567812345678'

//initialisation vector and key are hard coded, but can be generated using the functions below

function encrypt(text) {
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex') ;
}

function decrypt(text) {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

function generateKey() {
    return key = crypto.randomBytes(32);
}

function generateIV() {
    return iv = crypto.randomBytes(16)
}


module.exports = {
    encrypt: encrypt,
    decrypt: decrypt,
    generateKey: generateKey,
    generateIV: generateIV
}

// document.getElementById("encryptBtn").addEventListener("click", encrypt(document.getElementById("plainTextMsg")))
