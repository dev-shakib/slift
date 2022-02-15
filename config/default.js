module.exports = {
  api: {
    root: "/api",
    version: "/v1",
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
