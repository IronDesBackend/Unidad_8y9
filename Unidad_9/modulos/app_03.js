const http = require('http')

const server = http.createServer((req, res) => {
    
    res.setHeader("content-type", "application/json")
    res.writeHead(200)
    res.end('{"Nombre":"Felipe", "Genero": "false", "Edad": 47}')
})

const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('Servidor iniciado en el puerto ' + puerto)
})