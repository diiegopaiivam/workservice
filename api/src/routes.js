const { Router } = require('express');
const EmpregadoController = require('./controllers/EmpregadoController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/empregado', EmpregadoController.index);
routes.post('/empregado', EmpregadoController.store);

routes.get('/search', SearchController.index);

module.exports = routes;