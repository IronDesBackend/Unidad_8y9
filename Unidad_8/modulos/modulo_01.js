function mensaje01 () {
    return "Bonna tarde minino"
}

function mensaje02 (nombre) {
    return "Bonna tarde " + nombre
}

const bababoy = "----BABABOY----"
const miBool = false 
const miNum = 55

var persona = {
    nombre: 'Juan Bocanegra',
    Edad: 20,
    Genero: false,
    datos: function() {
        console.log(this.nombre, this.Edad, this.Genero)
    },
    saludar: function() {
        console.log('Hola buenas, my name es ' + this.nombre)
    }
    //datos y saludar son etiquetas
}

const JsonObj02 = '{"Nombre":"Felipe", "Genero": "false", "Edad": 47}'
const ObjJs02 = JSON.parse(JsonObj02)

// console.log(JsonObj02)
// console.log(ObjJs02.Nombre)
// console.log(ObjJs02.Edad)
// console.log(ObjJs02.Genero)

// console.log(persona)
// persona.datos()
// persona.saludar()

// console.log(module.exports) // es un arreglo vacio

/* Se puede manda de uno a uno
module.exports.mensaje01 = mensaje01
module.exports.mensaje02 = mensaje02
module.exports.bababoy = bababoy
module.exports.Bool = miBool // esta se llama Bool, no confundirse xD
module.exports.miNum = miNum
module.exports.persona = persona
module.exports.JsonObj02 = JsonObj02
module.exports.ObjJs02 = ObjJs02
*/

//O se puede mandar como un archivo de eqtiqueta valor... JSON?
module.exports = {mensaje01 : mensaje01, mensaje02 : mensaje02, bababoy : bababoy, Bool : miBool,miNum : miNum, persona : persona, JsonObj02 : JsonObj02, ObjJs02 : ObjJs02}


//console.log(module.exports)// es un arreglo con elementos
//console.log(mensaje01())
//console.log(mensaje02("Iron"))