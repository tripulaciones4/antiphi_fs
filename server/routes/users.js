const users = require('../controllers/users');
const routes = require('express').Router();


//

// http://localhost:4000/api/users/name?last_name=Zapatero
// http://localhost:4000/api/users/name?last_name=Zapatero&name=J.
routes.get('/name', users.findUserByName);
//http://localhost:4000/api/users/3
//http://localhost:4000/api/users/
routes.get('/:id?', users.findUser);

// http://localhost:4000/api/users/account/mariano@test.com
routes.get('/account/:email', users.findUserByEmail);

//http://localhost:4000/api/users/3/company?id_company=1
//de momento solo actualiza la company
routes.patch('/:id/company', users.updateUser);

//http://localhost:4000/api/users/create
routes.post('/create', users.createUser);





module.exports = routes;