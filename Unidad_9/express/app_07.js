
const express = require('express')
const server = express()


const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('El servicio esta en funcionamiento --> htpp://localhost:' + puerto)
})

//Rutas

server.get("/", (req, res) => {
    res.send("<h1>Hola mundo Express and Node.js mi pes</h1>")
})

server.get("/acercade", (req, res) => {
    res.send("<h1>Curso Back-end</h1>")
})

server.get("*", (req, res) => {
    res.send("<h1>Error 404 --- Página no encontrada</h1>")
})

