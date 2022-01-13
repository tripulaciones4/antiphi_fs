const users = require('../controllers/users');
const routes = require('express').Router();


//http://localhost:4000/api/users/
routes.get('/', users.getAllUsers);

//http://localhost:4000/api/users/search?name=Pepe
//http://localhost:4000/api/users/search?id_user=4
routes.get('/search', users.findUser);

//http://localhost:4000/api/users/create
routes.post('/create', users.createUser);




module.exports = routes;