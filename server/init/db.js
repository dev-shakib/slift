const mysql = require("mysql");
const config = require("config");
const logger = require("../utils/logger");

const pool = mysql.createPool(config.get("db"));

const query = (sql, values) =>
  new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        logger.info("query connec error!");
        logger.info(err);
        // resolve(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });

module.exports = query;
