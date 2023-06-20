const os = require('os')


module.exports.ipcuatro = os.networkInterfaces().Ethernet[1].address
module.exports.ipseis = os.networkInterfaces().Ethernet[0].address


// console.log(os.networkInterfaces().Ethernet[0].address)
// console.log(os.networkInterfaces().Ethernet[1].address)