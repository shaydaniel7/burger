// THIS FILE INITIATES THE CONNECTION TO MYSQL

// Dependencies
var mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
		user: "veagzt2yiu4c4l23",
		password: "drlfdoevznm1b9ps",
		database: "kidj62fyhgng60qj"

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
