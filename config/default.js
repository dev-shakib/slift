module.exports = {
  api: {
    port: 8081,
    root: "/api",
    bulk: "/bulk",
  },
  db: {
    host: "127.0.0.1",
    port: 3306,
    database: "shoplift",
    user: "root",
    password: "",
  },
  logger: {
    console: {
      level: "debug",
    },
    file: {
      logDir: "logs",
      logFile: "shoplift.log",
      level: "debug",
      maxsize: 1024 * 1024 * 10, // 10MB
      maxFiles: 5,
    },
  },
};
