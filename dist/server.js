"use strict";

const errorHandler = require("errorhandler");
const app = require("./index");
const requestIp = require("request-ip");

app.use(requestIp.mw());
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());
/**
 * Start Express server.
 */

//  const server = app.listen(app.get("port"), "0.0.0.0", () => {
//     console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
//     console.log("  Press CTRL-C to stop\n");
// });

var http = require('http');
var server = http.createServer(app);
server.listen(app.get("port"));