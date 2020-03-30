const crypto = require('crypto');

const generateUniqueID = () => crypto.randomBytes(4).toString('HEX');

module.exports = generateUniqueID;
