'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3678;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3678, function(){
	console.log('API REST Favoritos funcionando en http://localhost:' + port);
});
