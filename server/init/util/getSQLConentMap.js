const fs = require("fs");
const getSqlMap = require("./getSQLMap");

const sqlContentMap = {};

/**
 * Read sql file content
 * @param  {string} fileName File name
 * @param  {string} path     The path where the file is located
 * @return {string}          Script file content
 */
function getSqlContent(fileName, path) {
  const content = fs.readFileSync(path, "binary");
  sqlContentMap[fileName] = content;
}

/**
 * Encapsulate all sql file script content
 * @return {object}
 */
const getSqlContentMap = () => {
  const sqlMap = getSqlMap();
  // eslint-disable-next-line guard-for-in
  for (const key in sqlMap) {
    getSqlContent(key, sqlMap[key]);
  }

  return sqlContentMap;
};

module.exports = getSqlContentMap;
