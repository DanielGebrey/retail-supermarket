const mysql = require("mysql2");
module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@18P",
  database: "retail",
});
