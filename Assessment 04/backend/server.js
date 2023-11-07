
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "muthu2003",
  database: "job"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected To Mysql");
  var sql = "INSERT INTO apply1 (name, contact, Email, PreferredLocation, institute, degree, specialization, passingyear, cgpa) VALUES ('Ram', '7639446123', 'Ram@gmail.com', 'Bangalore', 'kcet','BE', 'CSE', '2024', '75');"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("one row inserted");
  });
});

