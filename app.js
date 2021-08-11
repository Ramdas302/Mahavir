var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./config/Development');
var HomeTemplate = require('./src/Api/MAVS/HomeTemplate');
var SolutionTemplate = require('./src/Api/MAVS/solutionTemplate');

var app = express();
app.use(bodyParser.json());
app.use('/api',HomeTemplate);
app.use('/api',SolutionTemplate);
app.listen(3232, () =>{
    console.log('server started at port 3232')
})