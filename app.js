"use-strict"

var express = require('express');
var router = express.Router(); // get an instance of the express Router




var app = express();



app.use('/', require('./app/controllers/static'))

var port = process.env.PORT || 1805
var server = app.listen(port, function() {
    console.log('Magic begins at port ', port);
});
