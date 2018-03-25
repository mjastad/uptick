#!/usr/bin/env node

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dbConfig = require('./config/dbConfig');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

infoRouter  = require('./routes/infoRoutes')();
app.use('/api/info' , infoRouter);

if (dbConfig.database.type == 'mssql') {
  mssqlRouter = require('./routes/mssqlRoutes')();
  app.use('/api/sql', mssqlRouter);
} else if (dbConfig.database.type == 'mysql') {
  mysqlRouter = require('./routes/mysqlRoutes')();
  app.use('/api/sql', mysqlRouter);
} else if (dbConfig.database.type == 'mongo') {
  mongoRouter = require('./routes/mongoRoutes')();
  app.use('/api/sql', mongoRouter);
}

app.get('/', function (req, res) {
    res.send('API is functional.');  
});

app.listen(3000, function () {
    console.log('Server is running..');
});
