const users = require('../controllers/users');
const routes = require('express').Router();
const validateToken = require('../middleware/validateToken')

// http://localhost:4000/api/users/name?last_name=Zapatero
// http://localhost:4000/api/users/name?last_name=Zapatero&name=J.
routes.get('/name', validateToken, users.findUserByName);

//http://localhost:4000/api/users/company/1
routes.get('/company/:id_company', validateToken, users.findUsersByCompany);

// http://localhost:4000/api/users/account/mariano@test.com
routes.get('/account/:email', users.findUserByEmail);

//http://localhost:4000/api/users/3
//http://localhost:4000/api/users/
routes.get('/:id?', validateToken, users.findUser);

//http://localhost:4000/api/users/3/company
//http://localhost:4000/api/users/1/company?id_company=1
//de momento solo actualiza la company
routes.patch('/:id/company',validateToken, users.updateUser);

//http://localhost:4000/api/users/create
routes.post('/create',validateToken, users.createUser);

//http://localhost:4000/api/users/login
routes.post('/login', users.loginUser );


module.exports = routes;