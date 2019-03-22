'use stricts'

var cors = require('cors');
var express = require('express');
var CityController = require('../controller/cities');
var api = express.Router();

api.use(cors())

api.post('/cities/getCity',cors(), CityController.getCity);
api.post('/cities/showByCity',cors(), CityController.showCity);
api.post('/cities/getCityCoords',cors(),CityController.getCityCoords)
module.exports = api;
