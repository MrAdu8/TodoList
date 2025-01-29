const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "Codename07@",
  database: "project-todo",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database successfully!");
});

module.exports = connection;
