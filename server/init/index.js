const getSqlContentMap = require("./util/getSQLConentMap");
const query = require("./db");
const logger = require("../utils/logger");

// Log success / failed status
const eventLog = (err, sqlFile, index) => {
  if (err) {
    logger.info(
      `[ERROR] sql script file: ${sqlFile} script ${
        index + 1
      } failed to execute o(╯□╰)o ！`
    );
  } else {
    logger.info(
      `[SUCCESS] sql script file: ${sqlFile} ${
        index + 1
      } script executed successfully O(∩_∩)O !`
    );
  }
};

// Get SQL content map
const sqlContentMap = getSqlContentMap();

// Init database
const createAllTables = async () => {
  for (const key in sqlContentMap) {
    const sqlShell = sqlContentMap[key];
    const sqlShellList = sqlShell.split(";");

    for (const [i, shell] of sqlShellList.entries()) {
      if (shell.trim()) {
        const result = await query(shell);
        if (result.serverStatus * 1 === 2) {
          eventLog(null, key, i);
        } else {
          eventLog(true, key, i);
        }
      }
    }
  }
  logger.info("sql script execution ends！");
  logger.info("Please press ctrl + c to exit！");
};

createAllTables();
