const companies = require('../controllers/companies');
const routes = require('express').Router();


//http://localhost:4000/api/companies/name?name=NASA
//http://localhost:4000/api/companies/search?id_company=4
routes.get('/name', companies.findCompanyByName);
//http://localhost:4000/api/companies/
//http://localhost:4000/api/companies/2
routes.get('/:id?', companies.findCompany);


//http://localhost:4000/api/companies/create
routes.post('/create', companies.createCompany);



module.exports = routes;