const os = require('os')


module.exports.so = os.type()
module.exports.arq = os.arch()
module.exports.ver = os.version()
module.exports.mem = os.totalmem()


// console.log(os.type())
// console.log(os.arch())
// console.log(os.version())
// console.log(os.totalmem())