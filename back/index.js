'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://admin:AranjueZ86!!@ds259410.mlab.com:59410/weatherapp', (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("DB Connected");
        app.listen(port, function(){
            console.log("API REST server running" +port)
        })
    }
})