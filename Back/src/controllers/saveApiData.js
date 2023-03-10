const axios = require('axios');
const { Character } = require('../models/Character');
const URL = 'https://rickandmortyapi.com/api/character/';


async function getApiData() {
    try {
        let arregloBDD = [];
        for (let i = 1; i <= 100; i++) {
            const response = await axios.get(URL + i);
            const data = response.data;                     //? SI HAY ERROR, VER ESTA ESTRUCTURA
            arregloBDD.push({                               // * Finalmente, pareciera que funciona bien
                id: data.id,
                name: data.name,
                species: data.species,
                status: data.status,
                origin: data.origin?.name,
                gender: data.gender,
                image: data.image
            })
        }
        //console.log(arregloBDD);
        return arregloBDD;
    } 
    catch (error) {
        return {error: error.message}
    }
    /* finally {
        console.log('aa');
    } */
}    


const saveApiData = async () => {
    try {
        const responseGetApiData = await getApiData();
        //console.log(responseGetApiData);               //* consologuea bien
        const createCharacters = await Character.bulkCreate(responseGetApiData);
        // bulkCreate nos permite pasarle un array de objetos y los crea todos juntos en la DB 
        return createCharacters
    } catch (error) {
        return {error: error.message}
    }
}


module.exports = {saveApiData}

/* const getApiData = (req, res) => {
    for (let i = 1; i <= limPersonajes; i++) {
            axios.get(URL + i)
            .then(response => response.data)
            .then (data => {
                arregloBDD.push({
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    status: data.status,
                    origin: data.origin?.name,
                    gender: data.gender,
                    image: data.image
                })
            })
            .catch(error => res.status(500).json(error.message))
    }
    res.status(200).json(arregloBDD)
} */