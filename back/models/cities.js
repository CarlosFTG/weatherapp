'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var citySchema = Schema({
    city:String,
    coords:[Number],
    userId:String,
});

module.exports = mongoose.model('Cities', citySchema)
