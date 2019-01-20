'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    surname: String,
    userName: String,
    email: String,
    password: String,
    rol: String,
    suscriptionDate: Date

});

module.exports = mongoose.model('User', UserSchema)