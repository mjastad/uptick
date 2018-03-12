#!/usr/bin/env node

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config/config');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

infoRouter = require('./routes/infoRoutes')();
sqlRouter = require('./routes/sqlRoutes')();

app.use('/api/info', infoRouter);
app.use('/api/sql', sqlRouter);

app.get('/', function (req, res) {
    res.send('API is functional.');  
});

app.listen(3000, function () {
    console.log('Server is running..');
});
