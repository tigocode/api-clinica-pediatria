const mysql = require('mysql2/promise.js');

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "1234",
  database: "CLINICADB",
});

module.exports = pool;
