"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgram = require("dgram");
const appConfig_1 = require("./../appConfig");
// Class
class Others {
    constructor(name, value) {
        this.name = "";
        this.value = undefined;
        this.name = name;
        this.value = value;
    }
}
exports.Others = Others;
class GelfMessage {
    constructor() {
        this.hostName = "";
        this.shortMessage = "";
        this.fullMessage = "";
        this.level = 1;
        this.loggerName = "";
        this.serverIP = "";
        this.remoteIP = "";
        this.url = "";
        this.result_code = 0;
        this.error_message = "";
        this.exception = undefined;
        this.status = "";
        this.input = {};
        this.others = [];
        this.timeStart = process.hrtime();
        this.elapsedTime = "";
    }
    toJSON() {
        const obj = {};
        obj["version"] = "1.1";
        obj["host"] = this.hostName;
        obj["short_message"] = (this.shortMessage.length > 250) ? this.shortMessage.substring(0, 254) : this.shortMessage;
        obj["full_message"] = (this.fullMessage.length > 1024) ? this.fullMessage.substring(0, 1023) : this.fullMessage;
        obj["level"] = this.level;
        obj["_facility"] = "NodeJS";
        obj["_app"] = "EagleOne-member-service";
        obj["_logger_name"] = this.loggerName;
        obj["_server_ip"] = this.serverIP;
        obj["_remote_ip"] = this.remoteIP;
        obj["_url"] = this.url;
        if (this.result_code > 1) {
            obj["_error_code"] = this.result_code;
            obj["_error_message"] = this.error_message;
            obj["_exception"] = this.exception;
        }
        obj["_status"] = this.status;
        obj["_input_parameter"] = this.input;
        if (this.others.length > 0) {
            this.others.forEach(function (p) {
                obj["_" + p.name] = p.value;
            });
        }
        obj["_elapsed_time"] = this.elapsedTime;
        return JSON.stringify(obj);
    }
    parseResult(data) {
        Object.assign(this, data);
    }
    addOtherField(name, value) {
        this.others.push(new Others(name, value));
    }
}
exports.GelfMessage = GelfMessage;
// Private Functions
function sender(message) {
    const msg = new Buffer(message.toJSON());
    const client = dgram.createSocket("udp4");
    client.send(msg, 0, msg.length, Number(appConfig_1.appConfig.logger.port), appConfig_1.appConfig.logger.server, function (err) {
        if (err) {
            console.log(err);
        }
        client.close();
    });
}
function logInfo(message) {
    message.level = 1;
    message.status = "success";
    sender(message);
}
function logWarn(message) {
    message.level = 2;
    message.status = "failed";
    sender(message);
}
function logError(message) {
    message.level = 3;
    message.status = "failed";
    sender(message);
}
// Public Functions
function log(message) {
    const hrend = process.hrtime(message.timeStart);
    message.elapsedTime = hrend[0] + " s " + hrend[1] / 1000000 + " ms";
    if (message.result_code == 1) {
        logInfo(message);
    }
    else {
        if (message.exception) {
            logError(message);
        }
        else {
            logWarn(message);
        }
    }
}
exports.log = log;