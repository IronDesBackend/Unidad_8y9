const http = require('http')

const server = http.createServer((req, res) => {
    
    res.setHeader("content-type", "text/html")
    res.writeHead(200)

    //HTML code
    res.end('<html lang="en"><head><meta charset="UTF-8">' +
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">'+ 
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
    '<title>Prueba01</title></head><body><h1>JavaScript</h1></body></html>')
})

const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('Servidor iniciado en el puerto ' + puerto)
})

