const EventEmitter = require('events')
const emisorEvento01 = new EventEmitter()
const emisorEvento02 = new EventEmitter()


emisorEvento01.on('HolaEvento', function() {
    console.log("Bongorno eventito, que me contas... Hola... EVENTO")
})

emisorEvento02.on('Saludar', (nombre) => {
    console.log("Hola, que me contas mi panaaaaaa... " + nombre)
})


emisorEvento01.emit('HolaEvento')
emisorEvento02.emit('Saludar', "Miguel")