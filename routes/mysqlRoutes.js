var express = require('express');
var mysql = require('mysql');

var mysqlCon = mysql.createConnection({
  host: "10.21.66.101",
  user: "root",
  password: "nutanix/4u",
  database: "Uptick"
});

var routes = function(){
    var mysqlRouter = express.Router();

    mysqlRouter.route('/')
        .get(function(req, res){
            mysqlCon.connect(function (err) {
                 mysqlCon.query('select * from Parts', function (err, result, fields) {
                      res.json(result);
	                });
	          });
     });
     return mysqlRouter; 
};

module.exports = routes;
