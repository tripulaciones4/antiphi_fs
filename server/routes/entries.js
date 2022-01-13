const entries = require('../controllers/entries');
const routes = require('express').Router();


//http://localhost:4000/api/entries/
routes.get('/', entries.getAllEntries);

//http://localhost:4000/api/entries/search?name=Pepe
//http://localhost:4000/api/entries/search?id_entry=4
routes.get('/search', entries.findEntry);

//http://localhost:4000/api/entries/create
routes.post('/create', entries.createEntry);


module.exports = routes;


