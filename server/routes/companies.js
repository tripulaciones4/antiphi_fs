const companies = require('../controllers/companies');
const routes = require('express').Router();


//http://localhost:4000/api/companies/
routes.get('/', companies.getAllCompanies);

//http://localhost:4000/api/companies/search?name=Pepe
//http://localhost:4000/api/companies/search?id_company=4
routes.get('/search', companies.findCompany);

//http://localhost:4000/api/companies/create
routes.post('/create', companies.createCompany);



module.exports = routes;