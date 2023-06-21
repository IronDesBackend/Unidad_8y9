
const express = require('express')
const server = express()


const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('El servicio esta en funcionamiento --> htpp://localhost:' + puerto)
})

/*
const express = require('express')
const server = express()

server.listen(8081, function(){
    console.log('servicio funcionando http://localhost:8081')
})*/