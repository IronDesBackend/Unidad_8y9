const os = require('os')

const info01 = require('./info01.js')
const info02 = require('./ips.js')
const info03 = require('./user.js')
const info04 = require('./cpus.js')


// console.log("")
// console.log("------------------------------------------------------------")
// console.log("Sistema Operativo: ", info01.so)
// console.log("Arquitectura: ", info01.arq)
// console.log("Procesador: ", info04.modelo)
// console.log("Nucleos: ", info04.num_cpus)
// console.log("Homedir: ", info03.home)
// console.log("IPv04 : ", info02.ipcuatro)
// console.log("IPv06: ",info02.ipseis)
// console.log("VersionSO: ", info01.ver)
// console.log("Usuario: ", info03.user)
// console.log("Memoria: ", info01.mem)
// console.log("------------------------------------------------------------")

let obj01 = {

    'Sistema Operativo' :  info01.so,
    'Arquitectura' :  info01.arq,
    'Procesador' :  info04.modelo,
    'Nucleos' :  info04.num_cpus,
    'Homedir' :  info03.home,
    'IPv04' :  info02.ipcuatro,
    'IPv06' : info02.ipseis,
    'VersionSO' :  info01.ver,
    'Usuario' :  info03.user,
    'Memoria' :  info01.mem

}

let jsonObj01 = JSON.stringify(obj01)

// console.log(obj01)
console.log(jsonObj01)

console.log(os.tmpdir() + "\\jsonObj01")