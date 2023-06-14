function mensaje01 () {
    return "Bonna tarde minino"
}

function mensaje02 (nombre) {
    return "Bonna tarde " + nombre
}

const bababoy = "----BABABOY----"
const miBool = false 
const miNum = 55



// console.log(module.exports) // es un arreglo vacio

module.exports.mensaje01 = mensaje01
module.exports.mensaje02 = mensaje02
module.exports.bababoy = bababoy
module.exports.Bool = miBool // esta se llama Bool, no confundirse xD
module.exports.miNum = miNum

//console.log(module.exports)// es un arreglo con elementos
//console.log(mensaje01())
//console.log(mensaje02("Iron"))