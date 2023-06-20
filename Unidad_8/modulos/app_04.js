function HolaTu(nombre){
    console.log("Hola "+ nombre)
}
function HolaTuLeng(nombre, lenguaje){
    console.log("Hola "+ nombre + ", Lenguaje: " + lenguaje)
}
function Segundos(x){
    console.log("paso "+ x + " segundos")
}
// HolaTu('iron')
// HolaTuLeng('iron', 'JS')

setImmediate(HolaTuLeng, 'Jennsy', 'Python') //se ejecuta después de terminar los procesos sincronos
setTimeout(HolaTuLeng, 10000, 'Marya', 'Java')
setTimeout(HolaTu, 5000, 'JuanSe')
HolaTu('iron') //la función es lo primero en ejecutarse
setInterval(Segundos, 2000, '2')
