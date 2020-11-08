// THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "Peewee77!",
		database: "burgers_db"

		// port: 3306,
		// host: "localhost",
		// user: "root",
		// password: "Peewee77!",
		// database: "burgers_db"
	});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;
