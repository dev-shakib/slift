const mysql = require("mysql");
const config = require("config");
const logger = require("./logger");

const connection = mysql.createConnection(config.db);

const query = async (sql, params) => {
  connection.query(sql, params, (error, results, fields) => {
    if (error) throw error;

    return results;
  });
};

module.exports = {
  query,
};
