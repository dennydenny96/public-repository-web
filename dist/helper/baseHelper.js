"use strict";

const _http = require("request");
const crypto = require("crypto");

function baseHelper() {
    var obj = {};

    //------------------------------------------------------------
    obj.HashingStringMD5 = function (data) {
        const hash = crypto.createHash("md5");
        const retVal = hash.update(data);
        return retVal.digest("hex");
    };

    //------------------------------------------------------------
    obj.postJSON = function (url, params, callback) {
        _http.post({
            "headers": { "content-type": "application/json" },
            "url": url,
            gzip: true,
            "body": params
        }, (error, response, body) => {
            if (error)
                return callback(true, error);

            const objJSON = JSON.parse(body);

            return callback(false, objJSON);
        });
    };

    //------------------------------------------------------------
    obj.CheckParametersVal = function (parameters, paramlength) {
        let isValid = true;
        if (Object.keys(parameters).length != paramlength) {
            isValid = false;
        }
        else {
            for (var p in parameters) {
                if (p == undefined) {
                    isValid = false;
                    break;
                }
            }
        }

        return isValid;
    };

    return obj;
}
exports.baseHelper = baseHelper();
