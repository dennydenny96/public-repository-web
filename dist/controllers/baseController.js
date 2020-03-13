"use strict";

const cookieHelper = require("./../helper/cookieHelper").cookieHelper;

function baseController() {
    var obj = {};

    obj.callHelperRegistration = function (req, res, func, params) {
        // const token = cookieHelper.Token(req, res);
        // params.sessionToken = token.session_token;
        // params.userLogin = token.user_login;

        func(params, (err, errMessage, objJSON) => {
            let jsonDt

            if (err)
                jsonDt = { "msg": errMessage, "value": 99999 };
            else
                jsonDt = { "msg": objJSON.ErrorMessage, "value": objJSON.ResultCode };

            return res.json(jsonDt);
        });
    };

    //----------------------------------------------------------------------------------------
    obj.callHelperList = function (req, res, func, params) {
        const draw = req.body.draw;
        //------- Paging
        let page = 0;
        let pageSize = "0";
        if (isNaN(req.body.start) || req.body.start == "0")
            page = 1;
        else
            page = Math.ceil(parseInt(req.body.start) / parseInt(req.body.length)) + 1;
        pageSize = req.body.length;
        //-----------------------

        const token = cookieHelper.Token(req, res);
        params.sessionToken = token.session_token;
        params.userLogin = token.user_login;
        params.page = page;
        params.pageSize = pageSize;
        params.level = token.level

        func(params, (err, errMessage, objJSON) => {
            let jsonDt;

            if (err)
                jsonDt = { "draw": draw, "recordsTotal": 0, "recordsFiltered": 0, "error": errMessage };
            else if (objJSON.ResultCode == 1)
                jsonDt = { "draw": draw, "recordsTotal": objJSON.Content.TotalRows, "recordsFiltered": objJSON.Content.TotalRows, "data": objJSON.Content.Data };
            else
                jsonDt = { "draw": draw, "recordsTotal": objJSON.Content.TotalRows, "recordsFiltered": objJSON.Content.TotalRows, "error": errMessage };

            return res.json(jsonDt);
        });
    };

    //----------------------------------------------------------------------------------------
    obj.callHelperPost = function (req, res, func, params) {
        const token = cookieHelper.Token(req, res);
        params.sessionToken = token.session_token;
        params.userLogin = token.user_login;

        func(params, (err, errMessage, objJSON) => {
            let jsonDt

            if (err)
                jsonDt = { "msg": errMessage, "value": 99999 };
            else
                jsonDt = { "msg": objJSON.ErrorMessage, "value": objJSON.ResultCode };

            return res.json(jsonDt);
        });
    };

    //----------------------------------------------------------------------------------------
    obj.callHelperCombo = function (req, res, func, params) {
        const token = cookieHelper.Token(req, res);
        params.sessionToken = token.session_token;
        params.userLogin = token.user_login;

        func(params, (err, errMessage, objJSON) => {
            let jsonDt;

            if (err)
                jsonDt = { "code": 99999, "message": errMessage, "data": undefined };
            else if (objJSON.ResultCode == 1)
                jsonDt = { "code": objJSON.ResultCode, "message": objJSON.ErrorMessage, "data": objJSON.Content.Data };
            else
                jsonDt = { "code": objJSON.ResultCode, "message": objJSON.ErrorMessage, "data": objJSON.Content.Data };

            return res.json(jsonDt);

        });
    };

    return obj;
}
exports.baseController = baseController();
