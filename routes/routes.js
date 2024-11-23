const express = require('express');

const routes = express.Router();

const {evaluarPredio} = require('../controllers/Controller');

routes.get('/webService', evaluarPredio)

module.exports = routes;