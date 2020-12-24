"use strict";

const cookieHelper = require("../helper/cookieHelper").cookieHelper;
const dashboard = require("./../helper/dashboardHelper").dashboardHelper;
const config = require("./../config/bo-config.json");
const jwt = require("jsonwebtoken");

function dashboardController() {
    var obj = {};
    let _lstModules;

    //---------------------------------------------------------------------------
    obj.getDashboard = function (req, res) {
        const _userName = cookieHelper.UserName(req, res);
        var _lang = cookieHelper.Language(req, res);
        const formData = {
            username: _userName,
            lang: _lang
        };
        res.render("./dashboard", {
            title: "Dashboard", data: formData, lstModules: _lstModules
        });
    };

    //---------------------------------------------------------------------------
    obj.checkSession = function (req, res) {
        res.json({ "value": 1 });
    };

    //---------------------------------------------------------------------------
    obj.changeLang = function (req, res) {
        const _token = cookieHelper.Token(req, res);
        const payload = {
            sub: _token.user_login,
            s: _token.session_token,
            lang: req.body.lang,
            level: _token.level
        };
        const jwtSecret = config.jwtSecret;
        const token = jwt.sign(payload, jwtSecret);
        res.clearCookie("token").cookie("token", token)
        return res.json({});
    };

    return obj;
}
exports.dashboardController = dashboardController();