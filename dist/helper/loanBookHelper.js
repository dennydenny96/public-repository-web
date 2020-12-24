"use strict";

const prgCfg = require("./../appConfig");
const helper = require("./baseHelper").baseHelper;
const jwt = require("jsonwebtoken");
const config = require("./../config/bo-config.json");

function loanBookHelper() {
    var obj = {}

    //----------------------------------------------------------------------------------------
    // Master Loan Book
    //----------------------------------------------------------------------------------------

    obj.MasterLoanBookList = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "Page": parameters.page,
            "PageSize": parameters.pageSize,
            "Level": parameters.level
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/master/loan/book/list.api", params, (err, objJSON) => {
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
    
    obj.MasterLoanBookAdd = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "Title": parameters.title,
            "Price": parameters.price
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/master/loan/book/add.api", params, (err, objJSON) => {
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
    // Transactions Loan Book
    //----------------------------------------------------------------------------------------

    obj.TransactionsLoanBookList = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "Page": parameters.page,
            "PageSize": parameters.pageSize,
            "Level": parameters.level
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/transaction/loan/book/list.api", params, (err, objJSON) => {
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
    
    obj.TransactionLoanBookBorrow = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "BookID": parameters.bookID
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/transaction/loan/book/borrow.api", params, (err, objJSON) => {
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
    
     obj.TransactionLoanBookReturn = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "BookID": parameters.bookID
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/transaction/loan/book/return.api", params, (err, objJSON) => {
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
    // Report Loan Book
    //----------------------------------------------------------------------------------------

    obj.ReportLoanBookList = function (parameters, callback) {
        const params = JSON.stringify({
            "SessionToken": parameters.sessionToken,
            "UserLogin": parameters.userLogin,
            "Level": parameters.level,
            "Page": parameters.page,
            "PageSize": parameters.pageSize
        });

        helper.postJSON(prgCfg.appConfig.api_bo.url + "/report/loan/book/list.api", params, (err, objJSON) => {
            console.log(err)
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
exports.loanBookHelper = loanBookHelper();