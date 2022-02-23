const db = require("../../utils/db");

const add = async (params) => {
  const result = await db.query(`INSERT INTO posts SET ?`, params);

  return result;
};

module.exports = {
  add,
};
