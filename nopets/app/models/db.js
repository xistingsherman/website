const mysql = require("mysql");

// need to install dotenv first, then follow this https://zetcode.com/javascript/dotenv/


require("dotenv").config();

  const hostname = process.env.HOST;
  const username = process.env.USER;
  const pw = process.env.PASSWORD;
  const db = process.env.DB;

// Create a connection to the database
const connection = mysql.createConnection({
  host: hostname,
  user: username,
  password: pw,
  database: db
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;

//npm un mysql && npm i mysql