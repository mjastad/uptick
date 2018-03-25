var express = require('express');
var mysql = require('mysql');
var mysqlConnection = require('../config/mysqlConfig');

var routes = function(){
    var mysqlRouter = express.Router();

    mysqlRouter.route('/')
        .get(function(req, res){
            mysqlConnection.connect(function (err) {
                 mysqlConnection.query('select * from Parts', function (err, results, fields) {
                      res.json(results);
	         });
	    });
     });
     return mysqlRouter; 
};

module.exports = routes;
