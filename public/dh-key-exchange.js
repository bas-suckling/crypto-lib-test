///https://medium.com/@moghiny/diffie-hellman-key-exchange-theory-and-practice-with-node-js-ab2575e14e8

const crypto = require('crypto')

// the argument in paranthesis show length of the prime number
// the bigger number ,the more difficult to break the cypher ,the more clock cycle needed to generate it
const alice = crypto.createDiffieHellman(1024);

alice.generateKeys();

let key_exchange_arguments = {

prime_number :null, //which is q in our notation

primitive_root:null , //which is t in our notation

x_of_a:null ,//the only secret parameter for each of its participant

y_of_a:null,//the public key which each of participant exchange with other part

}
key_exchange_arguments.prime_number =alice.getPrime().toString('hex')
key_exchange_arguments.primitive_root=alice.getGenerator().toString('hex')
key_exchange_arguments.x_of_a = alice.getPrivateKey().toString('hex')
key_exchange_arguments.y_of_a = alice.getPublicKey().toString('hex')
/**
* after logging the variable we have
*
*
*  prime_number:
'8d13beca6787cae7b74fe114312acd598d9a52ebfb53644ce154c4256fa9fca6e5b76d1129b5f8917ccf2ce7a11f1c6dfa4bcf8e2bca5bb78395d3118848e2a565398fb9f8d1ae35f78cd7abb9386c44f792617fb8ae19dd347f2cb8730040205ee71589e474abe4e1dc0f80c70ba68006f9772b24446633ba1f5844c52a5ab3',
primitive_root: '02',
x_of_a:
'7f67dffb02def0f6f5ed34547b2c0eff6e7cee8eaa4f3d9b647fb9dee10e0a657f35f0ca8072666a487b8ef248ed82e460d4a768de36276bc507b74897d1b44042269fb8369b9517a320629127ca601744abb51ff37c76c9f48961819f626a991f74e76c6ec32824bfe053998f93d72966ab6ede115ec09798dfac36f54772c8',
y_of_a:
'0e40d04d9d113d0c9386e23c3f633710292f5971367c649d42d03affb9371b4246a94444088b5c782beaf5686d4b9f39853c6af1fe1cb45df71d557fb0c473f6d22cb3dc19ac6243aed2f1a73ab777b3768a304ee47291ba91a3c0b5956f88bad236e89b67423461b9f667d6fbcd1fd8677d608d312884d3f1e47f8dce410db5'
*
*/

const finalSecret = bob.computeSecret(aliceKey);

