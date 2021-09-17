
require('rootpath')(); 
var express = require('express');

var expressJwt = require('express-jwt');
var config = require("./config.json");
var cors = require('cors');

var api = express();
api.use(cors());
api.use(express.urlencoded());
api.use(express.json());


api.use('/api', expressJwt({ secret: process.env.secret || config.secret }).unless({ path: ['/api/about','/api/users/authenticate', '/api/users/register'] }));
api.use('/api/schedule', require('./controllers/api/schedules.controller'));
api.use('/api/about', require('./controllers/api/about.controller'));
api.use('/api/users', require('./controllers/api/users.controller'));

var apiPort = process.env.PORT || config.port;

var serverAPI = api.listen(apiPort, function () {
    console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});

console.log('Aplicação iniciada...');
