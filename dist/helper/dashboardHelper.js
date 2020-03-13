"use strict";

const prgCfg = require("./../appConfig");
const helper = require("./baseHelper").baseHelper;
// const jwt = require("jsonwebtoken");
// const config = require("./../config/bo-config.json");

function dashboardHelper() {
    var obj = {};

    //------------------------------------------------------------
    obj.MenuGet = function (sessionToken, userLogin, callback) {
        const params = JSON.stringify({
            "SessionToken": sessionToken,
            "UserLogin": userLogin
        });

        helper.postJSON(prgCfg.appConfig.api_bo_account.url + "/dashboard/menu.api", params, (err, objJSON) => {
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
exports.dashboardHelper = dashboardHelper();