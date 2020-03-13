"use strict";

const Config = require("./../../config/bo-config.json");
const jwt = require("jsonwebtoken");

function logoutController() {
    var obj = {};

    obj.doLogout = function (req, res) {
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
            return res.status(200).clearCookie("token")
                .redirect("/login");

        });
    };

    return obj;
}
exports.logoutController = logoutController();
