
const express = require('express')

const path = require('path')

const server = express()


const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('El servicio esta en funcionamiento --> htpp://localhost:' + puerto)
})

function inicio (req, res) {
    res.send("<h1>Hola mundo Express and Node.js mi pes</h1>")
}

//Rutas

server.get("/", inicio)
server.get("/index.html", inicio)

server.get("/acercade", (req, res) => {
    //console.log(__dirname)// nombre del directorio--->lugar donde esta el archivo
    res.sendFile(path.join(__dirname, "/app_08.html")) //solo se pueden traer archivos con dir absolutas

    //con el "path.join" estamos agregando la dir absoluta al archivo que tenemos
})

server.get("*", (req, res) => {
    res.send("<h1>Error 404 --- Página no encontrada</h1>")
})

