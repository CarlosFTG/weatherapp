'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var weatherSchema = Schema({
    city:String,
    date:Date,
    userId:String,
    temperature:Number,
    precipitations:Number,
    humidity: Number,
    clouds:Number,
    windSpeed: Number
});

module.exports = mongoose.model('Weather', weatherSchema)