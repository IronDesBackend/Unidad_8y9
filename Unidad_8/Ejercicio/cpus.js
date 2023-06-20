const os = require('os')

module.exports.modelo = os.cpus()[0].model 
module.exports.num_cpus = os.cpus().length


// console.log(os.cpus()[0].model)
// console.log(os.cpus().length)