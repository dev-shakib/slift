/* eslint-disable prettier/prettier */
const walkFile = require("./walkFile");

/**
 * Get the file directory data in the sql directory
 * @return {object}
 */
const getSqlMap = () => {
  let basePath = __dirname;
  basePath = basePath.replace(/\\/g, "/");

  let pathArr = basePath.split("/");
  pathArr = pathArr.splice(0, pathArr.length - 1);
  basePath = `${pathArr.join("/")}/sql/`;

  const fileList = walkFile(basePath, "sql");
  return fileList;
};

module.exports = getSqlMap;
