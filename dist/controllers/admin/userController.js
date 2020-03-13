"use strict";

const userHelper = require("./../../helper/userHelper").userHelper;
const baseController = require("./../baseController").baseController;

function userController() {
    var obj = {};

    //----------------------------------------------------------------------------------------
    // User
    //----------------------------------------------------------------------------------------
    obj.getUser = function (req, res) {
        
        res.render("admin/userList");
    };

    //----------------------------------------------------------------------------------------
    obj.getUserList = function (req, res) {
        const params = {}

        baseController.callHelperList(req, res, userHelper.UserList, params);
    };

    //----------------------------------------------------------------------------------------
    obj.userAdd = function (req, res) {
        const params = {}

        params.userlogin = req.body.userlogin;
        params.password = req.body.password;
        params.level = req.body.level;
        
        baseController.callHelperPost(req, res, userHelper.UserAdd, params);
    };

    return obj;
}
exports.userController = userController();
