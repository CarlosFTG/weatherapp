'use stricts'

var cors = require('cors');
var express = require('express');
var WheatherController = require('../controller/weather');
var api = express.Router();

api.use(cors())

api.post('/weather/getWeather', WheatherController.getWheather);
api.post('/weather/getSavedDataByCity',WheatherController.getCityData)
api.delete('/weather/removeData',WheatherController.remove);
module.exports = api;