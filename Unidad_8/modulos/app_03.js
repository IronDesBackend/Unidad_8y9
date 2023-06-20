const os = require('os')
console.log(os.type()) //tipo de sistema operativo
console.log(os.homedir()) //dirección del usuario
console.log(os.hostname()) //nombre del anfitrion
console.log(os.userInfo()) //información del usuario del sistema operativo
console.log(os.userInfo().username) //nombre del usuario
console.log(os.userInfo().homedir) //dirección del usuario
console.log(os.uptime())//tiempo de uso desde el último reinicio, en seg