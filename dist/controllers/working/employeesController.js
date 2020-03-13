"use strict";

const employeesHelper = require("./../../helper/employeesHelper").employeesHelper;
const baseController = require("./../baseController").baseController;

function employeesController() {
    var obj = {};

    //----------------------------------------------------------------------------------------
    // Master Web
    //----------------------------------------------------------------------------------------
    obj.getMenu = function (req, res) {
        res.render("admin/menuList");
    };

    //----------------------------------------------------------------------------------------
    obj.getMenuList = function (req, res) {
        const params = {}
        params.firstName = req.body.firstName;
        params.lastName = req.body.lastName;
        params.email = req.body.email;
        params.departmentName = req.body.departmentName;
        params.jobTitleName = req.body.jobTitleName;
        baseController.callHelperList(req, res, employeesHelper.MenuList, params);
    };

    //----------------------------------------------------------------------------------------
    obj.getEmployeesList = function (req, res) {
        const params = {}
        params.ID = req.body.ID;
        params.NIK = req.body.NIK;
        baseController.callHelperList(req, res, employeesHelper.EmployeesList, params);
    };

    //----------------------------------------------------------------------------------------
    obj.employeeAdd = function (req, res) {
        const params = {}

        params.NIK = req.body.NIK;
        params.firstName = req.body.firstName;
        params.lastName = req.body.lastName;
        params.address = req.body.address;
        params.gender = req.body.gender;
        params.placeOfBirth = req.body.placeOfBirth;
        params.dateOfBirth = req.body.dateOfBirth;
        params.email = req.body.email;
        params.phone = req.body.phone;
        params.jobTitleID = req.body.jobTitleID;
        params.hireDate = req.body.hireDate;

        baseController.callHelperPost(req, res, employeesHelper.EmployeeAdd, params);
    };

    //----------------------------------------------------------------------------------------
    obj.employeeEdit = function (req, res) {
        const params = {}

        params.ID = req.body.ID;
        params.NIK = req.body.NIK;
        params.firstName = req.body.firstName;
        params.lastName = req.body.lastName;
        params.address = req.body.address;
        params.gender = req.body.gender;
        params.placeOfBirth = req.body.placeOfBirth;
        params.dateOfBirth = req.body.dateOfBirth;
        params.email = req.body.email;
        params.phone = req.body.phone;
        params.jobTitleID = req.body.jobTitleID;
        params.hireDate = req.body.hireDate;
        
        baseController.callHelperPost(req, res, employeesHelper.EmployeeEdit, params);
    };

    //----------------------------------------------------------------------------------------
    obj.employeeDelete = function (req, res) {
        const params = {}

        params.ID = req.body.ID;
        params.NIK = req.body.NIK;
        
        baseController.callHelperPost(req, res, employeesHelper.EmployeeDelete, params);
    };
    
    return obj;
}
exports.employeesController = employeesController();
