"use strict";
const Config = require("../config/bo-config.json");
const jwt = require("jsonwebtoken");

function authCheck() {
    var obj = {};

    //---------------------------------------------------------------------------
    obj.isAuthenticated = function (req, res, next) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const config = Config.jwtSecret;
        return jwt.verify(token, config, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) {
                return res.status(401).end();
            }
            
            res.locals.level = decoded.lvl;
            res.locals.label = require("../config/language/"+decoded.lang+".json");
            return next();
        });
    };

    //---------------------------------------------------------------------------
    obj.isAuthenticatedXHR = function (req, res, next) {
        const token = req.cookies["token"];
        const json = { "value": -1 , "msg": "Session expired, please login again!!!" };
        if (!token) {
            return res.json(json);
        }
        const config = Config.jwtSecret;
        return jwt.verify(token, config, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) {
                return res.status(401).end();
            }
            return next();
        });
    };

    //---------------------------------------------------------------------------
    obj.isAuthorized = function (req, res, next) {
        const token = req.cookies["token"];
        const json = { "value": -1, "msg": "Session expired, please login again!!!" };
        if (!token) {
            return res.json(json);
        }
        const config = Config.jwtSecret;
        return jwt.verify(token, config, (err, decoded) => {
            // the 401 code is for unauthorized status
            if (err) {
                return res.status(401).end();
            }
            return next();
        });
    };
    return obj;
}
exports.authCheck = authCheck();
