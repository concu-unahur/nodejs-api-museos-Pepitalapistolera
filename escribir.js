const fs = require('fs');

function despuesDeEscribir(error) {
    if(error) {
        throw new Error('No se pudo escribir')
    }

    console.log('Todo anda jamon, podes leer tu archivo')
}

fs.writeFile('saludo.txt', 'hola que tal', despuesDeEscribir);