"use strict";

const cookieHelper = require("./../helper/cookieHelper").cookieHelper;
const comboHelper = require("./../helper/comboHelper").comboHelper;
const baseController = require("./baseController").baseController;

function comboController() {
    var obj = {};

    //----------------------------------------------------------------------------------------
    obj.getComboDepartments = function (req, res) {
        const params = {}
        baseController.callHelperCombo(req, res, comboHelper.ComboDepartments, params);
    };

    //----------------------------------------------------------------------------------------
    obj.getComboJobTitles = function (req, res) {
        const params = {}
        params.departmentID = req.body.departmentID;
        baseController.callHelperCombo(req, res, comboHelper.ComboJobTitles, params);
    };
    
    //----------------------------------------------------------------------------------------
    obj.getComboDataBook = function (req, res) {
        const params = {}
        baseController.callHelperCombo(req, res, comboHelper.ComboDataBook, params);
    };

    return obj;
}
exports.comboController = comboController();