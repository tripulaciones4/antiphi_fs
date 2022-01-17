const entries = require('../controllers/queries');
const routes = require('express').Router();
const validateToken = require('../middleware/validateToken')


//http://localhost:4000/api/queries/
//http://localhost:4000/api/queries/1
routes.get('/:id?', validateToken, entries.findQuery);

//http://localhost:4000/api/queries/user/1
routes.get('/user/:id', validateToken, entries.findQueryByUser);

//http://localhost:4000/api/queries/create
routes.post('/create', validateToken, entries.createQuery);


module.exports = routes;


