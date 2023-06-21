const express = require('express')
const path = require ('path')
const server = express()

const PORT = process.env.PORT || 8081

server.listen(PORT, () => {
    console.log('Funciona')
})

server.use(express.static(path.join(__dirname, "arch")))

function start (req, res) {
    res.sendFile(path.join(__dirname, "/curriculum_vitae01.html"))
}

function form (req, res) {
    res.sendFile(path.join(__dirname, "/Formulario.html"))
}

function hamb (req, res) {
    res.sendFile(path.join(__dirname, "/Hamburguesa.html"))
}

function ensa (req, res) {
    res.sendFile(path.join(__dirname, "/Ensalada.html"))
}

function depo (req, res) {
    res.sendFile(path.join(__dirname, "/Deportes.html"))
}

function vide (req, res) {
    res.sendFile(path.join(__dirname, "/Videojuegos.html"))
}

function barr (req, res) {
    res.sendFile(path.join(__dirname, "/Barrio.html"))
}

//Rutas
server.get("/", start)
server.get("/index", start)
server.get("/index.html", start)
server.get("/curriculum_vitae01.html", start)


server.get("/Formulario.html", form)
server.get("/Hamburguesa.html", hamb)
server.get("/Ensalada.html", ensa)
server.get("/Deportes.html", depo)
server.get("/Videojuegos.html", vide)
server.get("/Barrio.html", barr)

server.get("*", (req, res) => {
    res.send("<h1>Error 404 --- Página no encontrada</h1>")
})
