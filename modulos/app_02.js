console.log(process.argv) //process.argv sirve para ver los argumentos que se mandan

for (var x=2; x <process.argv.length; x++) {
    console.log(process.argv[x]) //con este ciclo los imprimo
}

console.log(process.memoryUsage())