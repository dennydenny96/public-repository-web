"use strict";

const prgCfg = require("./../appConfig");
const helper = require("./baseHelper").baseHelper;
// const jwt = require("jsonwebtoken");
// const config = require("./../config/bo-config.json");

function employeesHelper() {
    var obj = {};

    //----------------------------------------------------------------------------------------
    // Menu
    //----------------------------------------------------------------------------------------
    obj.MenuList = function (parameters, callback) {
        const params = JSON.stringify({
            "Page": parameters.page,
            "PageSize": parameters.pageSize,
            "FirstName" : parameters.firstName,
            "LastName" : parameters.lastName,
            "Email" : parameters.email,
            "DepartmentID" : parameters.departmentName || 0,
            "JobTitleID" : parameters.jobTitleName || 0
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/menu/list.api", params, (err, objJSON) => {
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
    // Employees
    //----------------------------------------------------------------------------------------
    obj.EmployeesList = function (parameters, callback) {
        const params = JSON.stringify({
            "ID": parameters.ID,
            "NIK": parameters.NIK
        });
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/get/employees/list.api", params, (err, objJSON) => {
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

    obj.EmployeeAdd = function (parameters, callback) {
        
        const params = JSON.stringify({
            "NIK": parameters.NIK,
            "FirstName": parameters.firstName,
            "LastName": parameters.lastName,
            "Address": parameters.address,
            "Gender": parameters.gender,
            "PlaceOfBirth": parameters.placeOfBirth,
            "DateOfBirth": parameters.dateOfBirth,
            "Email": parameters.email,
            "Phone": parameters.phone,
            "JobTitleID": parameters.jobTitleID,
            "HireDate": parameters.hireDate
        });
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/employee/add.api", params, (err, objJSON) => {
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

    obj.EmployeeEdit = function (parameters, callback) {
        
        const params = JSON.stringify({
            "ID": parameters.ID,
            "NIK": parameters.NIK,
            "FirstName": parameters.firstName,
            "LastName": parameters.lastName,
            "Address": parameters.address,
            "Gender": parameters.gender,
            "PlaceOfBirth": parameters.placeOfBirth,
            "DateOfBirth": parameters.dateOfBirth,
            "Email": parameters.email,
            "Phone": parameters.phone,
            "JobTitleID": parameters.jobTitleID,
            "HireDate": parameters.hireDate
        });
        console.log(params)
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/employee/edit.api", params, (err, objJSON) => {
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

    obj.EmployeeDelete = function (parameters, callback) {
        
        const params = JSON.stringify({
            "ID": parameters.ID,
            "NIK": parameters.NIK
        });
        
        helper.postJSON(prgCfg.appConfig.api_bo.url + "/employee/delete.api", params, (err, objJSON) => {
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
exports.employeesHelper = employeesHelper();