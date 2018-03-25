var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.21.66.101",
  user: "root",
  password: "nutanix/4u",
  database: "Uptick"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
