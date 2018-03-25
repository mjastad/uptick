var express = require('express');
var sql = require("mssql");
var mssqldb = require('../config/mssqlConfig');

var routes = function(){
    var mssqlRouter = express.Router();

    mssqlRouter.route('/')
        .get(function(req, res){
            sql.connect(mssqldb.connConfig, function (err) {
                 var request = new sql.Request();
                 request.query('select * from Parts', function (err, recordset) {
                      res.json(recordset);
	         });
	    });
     });
     return mssqlRouter; 
};

module.exports = routes;
