const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hola buenas tardes, me llamo Rusell')
})

const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('Servidor iniciado en el puerto ' + puerto)
})