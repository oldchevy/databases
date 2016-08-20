var mysql = require('mysql');
var bMySQL = require('promise-mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

exports.dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

exports.dbBConnection = bMySQL.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});