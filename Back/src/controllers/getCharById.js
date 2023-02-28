const axios = require('axios');


const getCharById = function(res, ID) {
    axios.get(`https://rickandmortyapi.com/api/character/${ID}`)
    .then(response => response.data)
    .then(data => {
        let datos = {
            id: data.id,
            image: data.image,
            name: data.name,
            gender: data.gender,
            species: data.species
        }
        res
        .writeHead(200, { 'Content-Type':'application/json' })
        .end(JSON.stringify(datos))
    })
    .catch(error => {
        res
        .writeHead(500, { 'Content-Type':'text/plain' })
        .end(`El id: ${ID} no existe`)
    })
}

module.exports = getCharById