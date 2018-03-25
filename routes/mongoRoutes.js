var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var mongoConfig = require('../config/mongoConfig');
var assert = require('assert');

var routes = function(){
    var mongoRouter = express.Router();

    mongoRouter.route('/')
        .get(function(req, res){
            mongoClient.connect(mongoConfig.host.url, function (err, db) {
                 assert.equal(err,null);
                 var dbo = db.db("Uptick");
                 dbo.collection("parts").find().toArray(function(err, result) {
                      res.json(result);
	         });
	    });
     });
     return mongoRouter; 
};

module.exports = routes;
