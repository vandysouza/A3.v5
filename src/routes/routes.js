const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/produtoController');

routes.post('/produtos', produtoController.insert);

routes.get('/produtos', produtoController.index);

routes.get('/produtos/:id', produtoController.details);

routes.put('/produtos/:id', produtoController.update);

module.exports = routes;
