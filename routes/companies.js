const companies = require('../controllers/companies');
const routes = require('express').Router();
const validateToken = require('../middleware/validateToken');


//http://localhost:4000/api/companies/name?name=NASA
routes.get('/name', validateToken, companies.findCompanyByName);

//http://localhost:4000/api/companies/
//http://localhost:4000/api/companies/2
routes.get('/:id?', validateToken, companies.findCompany);

//http://localhost:4000/api/companies/create
routes.post('/create', validateToken, companies.createCompany);



module.exports = routes;