const superagent = require('superagent');

function imprimirMuseos(error, respuesta) {
  if (error) {
    throw new Error('algo se rompió', error);
  }

  const cantidad = respuesta.body.count;
  const museos = respuesta.body.results;

  console.log(`Se encontraron ${cantidad} museos.`);
  console.log(`El primer museo se llama ${museos[0].nombre}.`)
}

console.log('Antes de llamar a superagent')

function PegarleApi(error) {
superagent
  .get('https://www.cultura.gob.ar/api/v2.0/museos')
  .query({ format: 'json' })
  .end(escribirArchivo)
}

function escribirArchivo(error, respuesta) {
  fs.writeFile('museos.txt', museos.imprimirMuseos.nombre, terminar);
}

function terminar(error) {
  if(error) {
      throw new Error('No se pudo escribir')
  }

  console.log('Todo anda jamon, podes leer tu archivo')
}
PegarleApi.imprimirMuseos

// superagent
//   .get('https://www.cultura.gob.ar/api/v2.0/museos')
//   .query({ format: 'json' })
//   .end(imprimirMuseos)

console.log('Después de llamar a superagent') //escrbir rchivo
//devuelve errror y respuesta
