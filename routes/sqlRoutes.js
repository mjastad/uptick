var express = require('express');
var config = require('../config/config');
var sql = require("mssql");

var routes = function(){
    var sqlRouter = express.Router();

    sqlRouter.route('/')
        .get(function(req, res){
            sql.connect(config.connConfig, function (err) {
                 var request = new sql.Request();
                 request.query('select * from Parts', function (err, recordset) {
                      res.json(recordset);
	         });
	    });
     });
     return sqlRouter; 
};

module.exports = routes;
