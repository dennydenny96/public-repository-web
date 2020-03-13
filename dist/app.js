"use strict";

const express = require("express");
const compression = require("compression"); // compresses requests
const logger = require("morgan");
const lusca = require("lusca");
const path = require("path");
const expressValidator = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const authCheck = require("./middleware/auth-check").authCheck;
const flash = require("express-flash");
const bodyParser = require("body-parser");
const appConfig_1 = require("./appConfig");

// Create Express server
const app = express();

// Express configuration
app.set("port", appConfig_1.appConfig.app.port);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
let minify = "";
const uid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
  const r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});

app.locals.pretty = true;
app.use(logger("dev"));
app.set("view options", { debug: true });
app.set("view cache", false);
app.use("/dist", express.static(path.dirname(__dirname) + "/dist", { maxAge: 600000 }));
app.use(function (req, res, next) {
  // res.locals.vcss = appConfig_1.appConfig.version.css;
  // res.locals.vjs = appConfig_1.appConfig.version.js;
  res.locals.vcss = uid;
  res.locals.vjs = uid;
  res.locals.minify = minify;
  next();
});

app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(flash());
app.use(session({
  secret: "PGBO",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use("/bower_components", express.static(path.dirname(__dirname) + "/bower_components", { maxAge: 31557600000 }));
app.use("/plugins", express.static(path.dirname(__dirname) + "/plugins", { maxAge: 31557600000 }));

module.exports = { app: app, authCheck: authCheck };