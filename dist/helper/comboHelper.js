"use strict";

const prgCfg = require("./../appConfig");
const helper = require("./baseHelper").baseHelper;

function comboHelper() {
  var obj = {};

  //------------------------------------------------------------
  obj.ComboDepartments = function (parameters, callback) {
    const params = JSON.stringify({
      "SessionToken": parameters.sessionToken,
      "UserLogin": parameters.userLogin
    });

    helper.postJSON(prgCfg.appConfig.api_bo.url + "/combo/departments.api", params, (err, objJSON) => {
      if (err)
        return callback(true, objJSON.ErrorMessage);
      else {
        if (objJSON.ResultCode == 1) {
          const jsonDt = { Content: { Data: [] } }
          if (objJSON.Content.Data && objJSON.Content.Data.length > 0) {
            objJSON.Content.Data.forEach(x => {
              jsonDt.Content.Data.push({ "Key": x.ID, "Name": x.Name })
            });
            jsonDt.Content.Data.unshift({ "Key": "", "Name": "All" })
            return callback(false, undefined, jsonDt);
          }
          else {
            jsonDt.Content.Data.unshift({ "Key": "", "Name": "All" })
            return callback(false, undefined, jsonDt);
          }
        }
        else
          return callback(true, objJSON.ErrorMessage);
      }
    });
  };

  //------------------------------------------------------------
  obj.ComboJobTitles = function (parameters, callback) {
    const params = JSON.stringify({
      "SessionToken": parameters.sessionToken,
      "UserLogin": parameters.userLogin,
      "ID": parameters.departmentID || 0
    });

    helper.postJSON(prgCfg.appConfig.api_bo.url + "/combo/jobtitles.api", params, (err, objJSON) => {
      if (err)
        return callback(true, objJSON.ErrorMessage);
      else {
        if (objJSON.ResultCode == 1) {
          const jsonDt = { Content: { Data: [] } }
          if (objJSON.Content.Data && objJSON.Content.Data.length > 0) {
            objJSON.Content.Data.forEach(x => {
              jsonDt.Content.Data.push({ "Key": x.ID, "Name": x.Name })
            });
            jsonDt.Content.Data.unshift({ "Key": "", "Name": "All" })
            return callback(false, undefined, jsonDt);
          }
          else {
            jsonDt.Content.Data.unshift({ "Key": "", "Name": "All" })
            return callback(false, undefined, jsonDt);
          }
        }
        else
          return callback(true, objJSON.ErrorMessage);
      }
    });
  };

  //------------------------------------------------------------
  obj.ComboDataBook = function (parameters, callback) {
    const params = JSON.stringify({
      "SessionToken": parameters.sessionToken,
      "UserLogin": parameters.userLogin
    });

    helper.postJSON(prgCfg.appConfig.api_bo.url + "/combo/databook.api", params, (err, objJSON) => {
      if (err)
        return callback(true, objJSON.ErrorMessage);
      else {
        if (objJSON.ResultCode == 1) {
          const jsonDt = { Content: { Data: [] } }
          if (objJSON.Content.Data && objJSON.Content.Data.length > 0) {
            objJSON.Content.Data.forEach(x => {
              jsonDt.Content.Data.push({ "Key": x.ID, "Name": x.Title + ' - ' + x.Price + ' - ' + x.Borrowed })
            });
            jsonDt.Content.Data.unshift({ "Key": "", "Name": "All" })
            return callback(false, undefined, jsonDt);
          }
          else {
            jsonDt.Content.Data.unshift({ "Key": "", "Name": "All" })
            return callback(false, undefined, jsonDt);
          }
        }
        else
          return callback(true, objJSON.ErrorMessage);
      }
    });
  };

  return obj;
}
exports.comboHelper = comboHelper();