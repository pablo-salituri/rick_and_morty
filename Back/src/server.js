//var http = require('http');
//const getCharById = require('./controllers/getCharById.js')
//const getCharDetail = require('./controllers/getCharDetail.js')
const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')

server.use(express.json())      // para que funcinoe mi server con formato JSON
server.use('/', router)         // TODO: ver el CR


server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT)
});




/***********************************************************************************************


/* http
    .createServer((req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const id = req.url.slice(req.url.lastIndexOf('/')+1);
        if (req.url.includes('onsearch')) {
            getCharById(res, id)	
        }
        if (req.url.includes('detail')) {
            getCharDetail(res, id)
        }
    })
    .listen(PORT,'localhost');
 */

/**********************************************************************************************


/* const character = require('./utils/data.js')
const PORT = 3001;

http
    .createServer((req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.url.includes('rickandmorty/character')) {
            const id = req.url.slice(req.url.lastIndexOf('/')+1);
            let buscar = character.find(elem => elem.id === Number(id))      // a diferencia de filter, find devuelve el objeto
            res
            .writeHead(200, { 'Content-Type':'application/json' })
            .end(JSON.stringify(buscar));	
        }
    })
    .listen(PORT,'localhost'); */