var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "10.21.66.101",
   user: "root",
   password: "nutanix/4u",
   database: "Uptick"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
