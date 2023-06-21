//Cargar el modulo "express"
const express = require('express')
const server = express()

//Definir la carpeta ejs, por default se llama "views"
server.set('view engine', 'ejs')

var mensaje01 = "Vamoh a proba"
var pestaña = "No es EJS"
var people = [
    {cc:9,name:'Luis',lastname:'Garcia',email:'lgarcia@udistrital.edu.co'},
    {cc:2,name:'Ana',lastname:'Avila',email:'aavila@udistrital.edu.co'},
    {cc:8,name:'Maria',lastname:'Perez',email:'mperez@udistrital.edu.co'},
    {cc:4,name:'Alejandro',lastname:'Niño',email:'aniño@udistrital.edu.co'},
    {cc:27,name:'Manuel',lastname:'Arrieta',email:'marrieta@udistrital.edu.co'}
]


//Página de inicio
/*Así es de forma básica, sin parametros en el render
server.get('/', (req, res) => {
    res.render('templates/index')
})
*/

server.get('/', (req, res) => {
    res.render('templates/index', {
        tituloindex : mensaje01,
        pestaña : pestaña,
        personas : people
    })
})

//Página acercade 
server.get('/about', (req, res) => {
    res.render('templates/about', {
        tituloAbout : "This page es acerca de",
        mensaje02 : "Nosotros somos fieles seguidores de las papas fritas :D"
    })
})

//Página de error
server.get('*', (req, res) => {
    res.render('templates/error404', {
        titulo : "Error 404 mi pana, no puedes hacer nada áca mi rey<3"
    })
})

//Iniciar servidor y ponerlo a escuchar
server.listen(8081, function() {
    console.log('Funciona :D')
})