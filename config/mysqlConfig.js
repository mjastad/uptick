var mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
   host: "DB_SERVER_IPADDRESS",
   user: "DB_USER",
   password: "DB_PASSWORD",
   database: "DB_NAME"
});

mysqlConnection.connect(function(err) {
    if (err) throw err;
});

module.exports = mysqlConnection;
