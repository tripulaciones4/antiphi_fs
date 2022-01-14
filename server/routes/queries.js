const entries = require('../controllers/queries');
const routes = require('express').Router();


//http://localhost:4000/api/queries/
//http://localhost:4000/api/queries/1
routes.get('/:id?', entries.findQuery);

//http://localhost:4000/api/queries/user/1
routes.get('/user/:id', entries.findQueryByUser);

//http://localhost:4000/api/queries/create
routes.post('/create', entries.createQuery);


module.exports = routes;


