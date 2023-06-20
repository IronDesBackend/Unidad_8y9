/* Con el obj mod01 se traen todos los elementos del require
const mod01 = require("./modulo_01.js")

// console.log(mod01)

console.log('----------DATOS Y FUNCIONES----------')
console.log(mod01.mensaje01())
console.log(mod01.mensaje02("Iron"))
console.log(mod01.bababoy)
console.log(mod01.Bool)
console.log(mod01.miNum)
console.log('----------OBJETOS Y FUNCIONES----------')
console.log(mod01.persona)
mod01.persona.datos()
mod01.persona.saludar()
console.log('----------JSON----------')
console.log(mod01.JsonObj02)
console.log(mod01.ObjJs02.Nombre)
console.log(mod01.ObjJs02.Edad)
console.log(mod01.ObjJs02.Genero)
*/

//De esta forma solo se trae un elemento
const {mensaje01, mensaje02, Bool} = require("./modulo_01.js")

console.log(mensaje01())
console.log(mensaje02('Iron'))
console.log(Bool)