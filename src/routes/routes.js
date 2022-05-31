const express = require('express');
const routes = express.Router();

const produtoController = require('../controllers/produtoController');

routes.post('/produtos', produtoController.insert);

module.exports = routes;