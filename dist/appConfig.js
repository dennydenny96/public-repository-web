"use strict";

const dotenv = require("dotenv");
// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.config" });
exports.appConfig = {
    app: {
        port: process.env.APP_PORT || 7000,
        googleAnalytic: process.env.GA || ""
    },
    logger: {
        server: process.env.GRAYLOG_SERVER || "localhost",
        port: process.env.GRAYLOG_PORT || 9000
    },
    api_bo: {
        url: process.env.API_BO_URL || ""
    },
    tcp: {
        ip: process.env.TCP_IP || "35.236.86.200",
        port: process.env.TCP_PORT || "8888"
    },
    version: {
      js: "1.02",
      css: "1.0"
    }
};