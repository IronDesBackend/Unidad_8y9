require('dotenv').config()// se requiere ese modulo, se obtiene con el "npm install" + el nombre del modulo


const PORT = process.env.PORT || 3000 //si existe la variable "process.env.PORT", de otro modo, toma el valor predeterminado
const APIKEY = process.env.APIKEY //MONDONGO

//las variables de entorno se guardan en el archivo ".env" y se usan gracias al modulo "dotenv"

//console.log(process)// son todos los procesos XD
console.log(process.env)
//console.log(process.env.COMPUTERNAME)//es una mezcla de modulos y OBJETOS de JAVA
console.log(process.env.PORT)//es indefinido hasta usar el modulo "dotenv"

console.log(PORT)//esta esta definida por la constante, hasta usar el modulo
console.log(APIKEY)