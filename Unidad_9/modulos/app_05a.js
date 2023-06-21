const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    
    if (req.url=== "/index.html") {
        res.setHeader("content-type", "text/html")
        res.writeHead(200)
        res.end('<html lang="en"><head><meta charset="UTF-8">' +
        '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+ 
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
        '<title>Prueba01</title></head><body><h1>JavaScript</h1></body></html>')
    } else {
    fs.readFile("./app_05.html", "utf-8", (err, contenido) => {
        if (err) {
            console.log(err)
        } else {
            res.setHeader("content-type", "text/html")
            res.writeHead(200)
            res.end(contenido)
        }
    })}

})

const puerto = process.env.puerto || 8081

server.listen(puerto, function() {
    console.log('Servidor iniciado en el puerto ' + puerto)
})