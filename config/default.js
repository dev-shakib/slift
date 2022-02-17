module.exports = {
  api: {
    port: 8081,
    root: "/api",
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
