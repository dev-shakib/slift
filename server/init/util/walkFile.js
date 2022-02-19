const fs = require("fs");

/**
 * Traverse the file directory under the directory

 * @param  {string} pathResolve  Directory path to traverse
 * @param  {string} mime         Iterate over the file extensions
 * @return {object}              Returns the directory result after traversal
 */
const walkFile = (pathResolve, mime) => {
  const files = fs.readdirSync(pathResolve);
  const fileList = {};
  for (const [i, item] of files.entries()) {
    const itemArr = item.split(".");

    const itemMime =
      itemArr.length > 1 ? itemArr[itemArr.length - 1] : "undefined";
    if (mime === itemMime) {
      fileList[item] = pathResolve + item;
    }
  }

  return fileList;
};

module.exports = walkFile;
