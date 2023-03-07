const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharDetail = async (req, res) => {
    try {
        const {detailId} = req.params;
        const response = await axios.get(URL + detailId)
        const data = response.data;
        let datos = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender,
            origin: data.origin?.name
        }
        return res.status(200).json(datos)
    }
    catch(error) {
        return res.status(500).json(error.message)
    }
    finally {
        console.log('done');
    }
}





// *Petición con promesas

/* const getCharDetail = (req, res) => {
    const {detailId} = req.params;
    axios.get(URL + detailId)
    .then(response => response.data)
    .then(data => {
        let datos = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender,
            origin: data.origin?.name
        }
        return res.status(200).json(datos)
    })
    .catch(error => res.status(500).json(error.message)) */



// *Servidor levantado con Web Server

/* const getCharDetail = function(res, ID) {
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
} */


module.exports = {getCharDetail}