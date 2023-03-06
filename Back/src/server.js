//var http = require('http');
//const getCharById = require('./controllers/getCharById.js')
//const getCharDetail = require('./controllers/getCharDetail.js')
const express = require('express');
const server = express();
const cors = require('cors');
const PORT = 3001;
const router = require('./routes/index')
const favsRouter = require('./routes/favsRouter')

server.use(express.json())                  // *Para que funcione mi server con formato JSON
server.use(cors())
server.use('/rickandmorty', router)         // *Las request que vienen desde el front llegan a este router --> Es un MW para '/' que utiliza "router"
                                            // *Todas las request que comiencen con "/" las va a redirigir al archivo /routes/index 
                                            // ? SI HAY PROBLEMAS, VER LA LINEA 10
server.use('/favs', favsRouter)         



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