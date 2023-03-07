const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const response = await axios.get(URL + id)
        const data = response.data;
        let datos = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender
        };
        return res.status(200).json(datos)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
    /* finally {
        console.log('done');
    } */
}






// *Petición con promesas

/* const getCharById = (req, res) => {
    const {id} = req.params;
    axios.get(URL + id)
    .then(response => response.data)
    .then(data => {
        let datos = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender
        };
        return res.status(200).json(datos)
    })
    .catch(error => res.status(500).json(error.message))
} */




// *Servidor levantado con Web Server

/* const getCharById = function(res, ID) {
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
} */

module.exports = {getCharById}