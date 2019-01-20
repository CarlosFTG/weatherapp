'use strict'

var express = require('express');
var bodyparser = require('body-parser');
var cors=require('cors');
var app = express()
 const corsMiddleware = cors({
    origin: [process.env.URL, 'http://www.wheatherapp.com','http://wheatherapp.com','http://localhost:4200']
    
  })

  app.use(corsMiddleware) 
  app.options('*', corsMiddleware) 


// load routes
var user_routes = require('./router/user')
var weather_routes = require('./router/weather')
var cities_routes = require('./router/cities')

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())


//base routes
app.use('/api', user_routes)
app.use('/api',weather_routes);
app.use('/api',cities_routes);


module.exports = app;
