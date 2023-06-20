const http = require('http')

const server = http.createServer((req, res) => {
    
    //console.log(req)
    console.log('----------Request----------')
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    console.log(req.headers.host)


   //console.log(res)
    console.log('----------Response----------')
    console.log(res.statusCode)
    res.statusCode = 404


    res.write('<h1>Hola buenas tardes, me llamo Rusell</h1>')
    res.end()
})

const puerto = process.env.puerto || 8081

server.listen(puerto, () => {
    console.log('Servidor iniciado en el puerto ' + puerto)
})