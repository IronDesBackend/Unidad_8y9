const os = require('os')


module.exports.user = os.userInfo().username
module.exports.home = os.userInfo().homedir



// console.log(os.userInfo().homedir)
// console.log(os.userInfo().username)