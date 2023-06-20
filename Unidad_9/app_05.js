const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    
    fs.readFile("./app_05.html", "utf-8", (err, contenido) => {
        if (err) {
            console.log(err)
        } else {
            res.setHeader("content-type", "text/html")
            res.writeHead(200)
            res.end(contenido)
        }
    })

})

const puerto = process.env.puerto || 8081

server.listen(puerto, function() {
    console.log('Servidor iniciado en el puerto ' + puerto)
})