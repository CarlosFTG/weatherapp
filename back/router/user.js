'use stricts'


var express = require('express');
var UserController = require('../controller/user');
var api = express.Router()
//var cors = require('cors');

//api.use(cors())

api.post('/user/create', UserController.createUser);
api.post('/login',UserController.login);
api.post('/user/removeUser',UserController.removeUser);
api.post('/user/getCityCoords',UserController.findUsersCities);


module.exports = api;
