const fs = require('fs')

fs.readFile("./arch05.json", 'utf-8', (err, contenido) => {
    if(err) {
        console.error(err) //con esto bota error en caso de no encontrar el archivo
    } else {
        console.log(contenido) //en caso de encontrar el archivo, se muestra el contenido
    }
})


fs.readFile("./arch05.json", 'utf-8', function (err, contenido) {
    if (err) {
        throw new Error(err)
    }
    //console.log(contenido)
    console.log("sigo procesando mi pana")
})


fs.rename("./arch05.json", "EL_JASON.xml", (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log("Nombre cambiado con éxito--- es inmediato")
})

setTimeout(function() {
    fs.rename("./EL_JASON.xml", "arch05.json", (err) => {
        if (err) {
            throw new Error(err)
        }
        console.log("Nombre retomado con éxito")
    })
}, 5000)

/*
// con esto renombras archivos
fs.rename("./EL_JASON.xml", "arch05.json", (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log("Nombre cambiado con éxito")
})
*/


fs.appendFile("./arch05.txt", "Un texto de pana", (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log("Archivo actualizado exitosamente")
})


fs.appendFile("./arch05a.txt", "Un texto nuevo pero de panaaaaaa", (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log("Archivo a actualizado exitosamente")
})


let miobjeto01 = {
    minumero : 12,
    mistring : "Hola Mundo JavaScript",
    mibooleano : true,
}


fs.writeFile("./arch05c.txt", JSON.stringify(miobjeto01), (err) => {
    if (err) {
        throw new Error(err)
    }
    console.log("Archivo actualizado de forma exitosa")
})


//Con el "unlink" borramos un archivo
fs.unlink("./arch05b.txt", (err) => {
    if (err) {
        //throw new Error(err)
        console.log(err)
    }
    console.log("Archivo borrado exitosamente")
})

/*
//no sirvio :(
setTimeout(fs.link("./modulos", "./arch05b.txt", (err) => {
    if (err) {
        //throw new Error(err)
        console.log(err)
    }
    console.log("Archivo creado exitosamente")
}), 7000);
*/
