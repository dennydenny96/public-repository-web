"use strict";

const prgCfg = require("./../appConfig");
const helper = require("./baseHelper").baseHelper;
const jwt = require("jsonwebtoken");
const config = require("./../config/bo-config.json");

function userHelper() {
    var obj = {}

    //------------------------------------------------------------
    obj.SignIn = function (req, callback) {
        // const clientIp = (req.headers["x-forwarded-for"] || req.connection.remoteAddress || "").toString().split(",")[0].trim();
        const encPassword = helper.HashingStringMD5(req.body.password.toString());
        let payload;
        
        const params = JSON.stringify({
            // "ip": clientIp,
            "Password": encPassword,
            "UserLogin": req.body.username
        });
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/login.api", params, (err, objJSON) => {

            // loginLevel = objJSON.Content.Data[0].Level
            if (err)
                return callback(objJSON.ErrorMessage, "auth");
            else {
                if (objJSON.ResultCode == 1) {
                    const SID = objJSON.Content.Data[0].SessionToken.toString();
                    payload = {
                        i: objJSON.Content.Data[0].UserID.toString(),
                        // sub: req.body.username.trim(),
                        sub: objJSON.Content.Data[0].UserID.toString(),
                        s: SID,
                        lang: "en-us",
                        c: "",
                        o: "",
                        guid: "123123",
                        lvl: objJSON.Content.Data[0].Level
                    };
                    
                    const jwtSecret = config.jwtSecret;
                    const token = jwt.sign(payload, jwtSecret);
                    if (!token)
                        return callback("Token error");
                    return callback(undefined, token);
                }
                else
                    return callback(true, objJSON.ErrorMessage);
            }
        })
    };

    //----------------------------------------------------------------------------------------

    obj.RegisterAccount = function (parameters, callback) {
        const params = JSON.stringify({
            "MobileNumber": parameters.mobileNumber,
            "FirstName": parameters.firstName,
            "LastName": parameters.lastName,
            "DateOfBirth": parameters.dateOfBirth,
            "Gender": parameters.gender,
            "Email": parameters.email
        });
        
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/registration.api", params, (err, objJSON) => {
            if (err)
                return callback(true, objJSON.ErrorMessage);
            else {
                if (objJSON.ResultCode == 1)
                    return callback(false, undefined, objJSON);
                else
                    return callback(true, objJSON.ErrorMessage);
            }
        });
    };

    //----------------------------------------------------------------------------------------

    obj.CreateaccountLoginUser = function (parameters, callback) {
        const encPassword = helper.HashingStringMD5(parameters.password.toString());
        const params = JSON.stringify({
            "UserLogin": parameters.userName,
            "Password": encPassword,
            "Level": parameters.level,
            "MobileNumber": parameters.mobileNumber
        });
        
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/create/account/login/user.api", params, (err, objJSON) => {
            if (err)
                return callback(true, objJSON.ErrorMessage);
            else {
                if (objJSON.ResultCode == 1)
                    return callback(false, undefined, objJSON);
                else
                    return callback(true, objJSON.ErrorMessage);
            }
        });
    };

    //----------------------------------------------------------------------------------------

    obj.UserList = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "Page": parameters.page,
            "PageSize": parameters.pageSize,
            "Level": parameters.level
        });
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/userlist.api", params, (err, objJSON) => {
            if (err)
                return callback(true, objJSON.ErrorMessage);
            else {
                if (objJSON.ResultCode == 1)
                    return callback(false, undefined, objJSON);
                else
                    return callback(true, objJSON.ErrorMessage);
            }
        });
    };

    //----------------------------------------------------------------------------------------

    obj.UserAdd = function (parameters, callback) {
        const encPassword = helper.HashingStringMD5(parameters.password.toString());
        const params = JSON.stringify({
            "UserLogin": parameters.userlogin,
            "Password": encPassword,
            "Level": parameters.level
        });
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/useradd.api", params, (err, objJSON) => {
            if (err)
                return callback(true, objJSON.ErrorMessage);
            else {
                if (objJSON.ResultCode == 1)
                    return callback(false, undefined, objJSON);
                else
                    return callback(true, objJSON.ErrorMessage);
            }
        });
    };

    return obj;
}
exports.userHelper = userHelper();