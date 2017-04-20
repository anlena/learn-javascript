const crypto = require("crypto");

const hash = crypto.createHash('md5');

// hash.update("Hello world!");
hash.update("hello,nodejsa");

console.log(hash.digest('hex'));