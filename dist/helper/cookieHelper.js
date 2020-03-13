"use strict";

const atob = require("atob");

function cookieHelper() {
    var obj = {};

    //-------------------------------------------------------------------------------
    obj.UserID = function (req, res) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const userid = obj.decodeToken(token).i;
        return userid;
    };

    //-------------------------------------------------------------------------------
    obj.UserName = function (req, res) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const username = obj.decodeToken(token).sub;
        return username;
    };

    //-------------------------------------------------------------------------------
    obj.Language = function (req, res) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const language = obj.decodeToken(token).lang;
        return language;
    };

    //-------------------------------------------------------------------------------
    obj.UserGuid = function (req, res) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const operatorid = obj.decodeToken(token).guid;
        return operatorid;
    };

    //-------------------------------------------------------------------------------
    obj.SessionToken = function (req, res) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const sessiontoken = obj.decodeToken(token).s;
        return sessiontoken;
    };

    //-------------------------------------------------------------------------------
    obj.Token = function (req, res) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const userid = obj.decodeToken(token).i;
        const username = obj.decodeToken(token).sub;
        const SID = obj.decodeToken(token).s;
        const Lang = obj.decodeToken(token).lang;
        const Level = obj.decodeToken(token).lvl;
        
        return { user_id: userid, user_login: username, session_token: SID, lang: Lang, level: Level };
    };

    //-------------------------------------------------------------------------------
    obj.stringify = function (req, res, data) {
        const token = req.cookies["token"];
        if (!token) {
            return res.redirect("/login");
        }
        const username = obj.decodeToken(token).sub;
        const SID = obj.decodeToken(token).s;
        data["sessiontoken"] = SID;
        data["username"] = username;

        return JSON.stringify(data);
    };

    //-------------------------------------------------------------------------------
    obj.urlBase64Decode = function (str) {
        let output = str.replace(/-/g, "+").replace(/_/g, "/");
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += "==";
                break;
            }
            case 3: {
                output += "=";
                break;
            }
            default: {
                throw "Illegal base64url string!";
            }
        }
        return decodeURIComponent(escape(atob(output)));
    };

    //-------------------------------------------------------------------------------
    obj.decodeToken = function (token) {
        const parts = token.split(".");
        if (parts.length !== 3) {
            throw new Error("JWT must have 3 parts");
        }
        const decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error("Cannot decode the token");
        }
        return JSON.parse(decoded);
    }

    return obj;
}
exports.cookieHelper = cookieHelper();
