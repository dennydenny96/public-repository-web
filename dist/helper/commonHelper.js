"use strict";

const logger = require("../helper/logger");
const crypto = require("crypto");

// class
class RequestObject {
    constructor() {
        this.fullURL = "";
        this.input = {};
        this.serverIP = "";
        this.remoteIP = "";
    }
}
exports.RequestObject = RequestObject;
class StandardResult {
    constructor() {
        this.resultCode = "";
        this.resultMessage = "";
        this.resultValue = {};
    }
}
exports.StandardResult = StandardResult;
// Public Functions
function CreateRequestObject(req) {
    const retVal = new RequestObject();
    retVal.fullURL = req.protocol + "://" + req.headers.host + req.originalUrl;
    retVal.input = JSON.stringify(req.body);
    retVal.serverIP = req.connection.localAddress;
    retVal.remoteIP = req.connection.remoteAddress;
    return retVal;
}
exports.CreateRequestObject = CreateRequestObject;
function CreateMessageLogger(name, requestObject) {
    const retVal = new logger.GelfMessage();
    retVal.loggerName = name;
    retVal.url = requestObject.fullURL;
    retVal.serverIP = requestObject.serverIP;
    retVal.remoteIP = requestObject.remoteIP;
    retVal.input = requestObject.input;
    return retVal;
}
exports.CreateMessageLogger = CreateMessageLogger;
function CreateStandardResult(code, message, value) {
    const retVal = new StandardResult();
    retVal.resultCode = code;
    retVal.resultMessage = message;
    retVal.resultValue = value;
    return retVal;
}
exports.CreateStandardResult = CreateStandardResult;
function HashingStringSHA512(data, salt) {
    const hmac = crypto.createHmac("sha512", salt);
    const retVal = hmac.update(data);
    return retVal.digest("hex");
}
exports.HashingStringSHA512 = HashingStringSHA512;
function HashingStringMD5(data) {
    const hash = crypto.createHash("md5");
    const retVal = hash.update(data);
    return retVal.digest("hex");
}
exports.HashingStringMD5 = HashingStringMD5;
function IsValidParams(params) {
    let retVal = true;
    // check for undefined
    for (const p of params) {
        if (p == undefined) {
            retVal = false;
            break;
        }
    }
    return retVal;
}
exports.IsValidParams = IsValidParams;