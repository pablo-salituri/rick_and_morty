const axios = require('axios');

const getCharDetail = function(res, ID) {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response => response.data)
    .then(datos => {
        let detalle = {
            image: datos.image,
            name: datos.name,
            gender: datos.gender,
            status: datos.status,
            origin: datos.origin?.name,
            species: datos.species
        }
        res
        .writeHead(200, { 'Content-Type':'application/json' })
        .end(JSON.stringify(detalle))
    })
    .catch(error => {
        res
        .writeHead(500, { 'Content-Type':'text/plain' })
        .end('No hay detalles')
    })
}


module.exports = getCharDetail