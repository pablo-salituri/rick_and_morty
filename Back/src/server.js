var http = require('http');
const character = require('./utils/data.js')
const PORT = 3001;

http
    .createServer((req,res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (req.url.includes('rickandmorty/character')) {
            const id = req.url.slice(req.url.lastIndexOf('/')+1);
            let buscar = character.find(elem => elem.id === Number(id))          // a diferencia de filter, find devuelve el objeto
            res
            .writeHead(200, { 'Content-Type':'application/json' })
            .end(JSON.stringify(buscar));	
        }
    })
    .listen(PORT,'localhost');