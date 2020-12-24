"use strict";
const loanBookHelper = require("./../../helper/loanBookHelper").loanBookHelper;
const baseController = require("./../baseController").baseController;

function loanBookController() {
    var obj = {};

    //----------------------------------------------------------------------------------------
    // Master Loan Book
    //----------------------------------------------------------------------------------------
    obj.getMasterLoanBook = function (req, res) {
        
        res.render("loanbook/masterLoanBookList");
    };

    //----------------------------------------------------------------------------------------
    obj.getMasterLoanBookList = function (req, res) {
        const params = {}

        baseController.callHelperList(req, res, loanBookHelper.MasterLoanBookList, params);
    };

    //----------------------------------------------------------------------------------------
    obj.masterLoanBookAdd = function (req, res) {
        const params = {}
        params.title = req.body.title;
        params.price = req.body.price;
        baseController.callHelperPost(req, res, loanBookHelper.MasterLoanBookAdd, params);
    };

    //----------------------------------------------------------------------------------------
    // Transactions Loan Book
    //----------------------------------------------------------------------------------------
    obj.getTransactionsLoanBook = function (req, res) {
        res.render("loanbook/transactionsLoanBookList");
    };

    //----------------------------------------------------------------------------------------
    obj.getTransactionsLoanBookList = function (req, res) {
        const params = {}

        baseController.callHelperList(req, res, loanBookHelper.TransactionsLoanBookList, params);
    };

    //----------------------------------------------------------------------------------------
    obj.transactionLoanBookBorrow = function (req, res) {
        const params = {}
        params.bookID = req.body.bookID;
        baseController.callHelperPost(req, res, loanBookHelper.TransactionLoanBookBorrow, params);
    };

    //----------------------------------------------------------------------------------------
    obj.transactionLoanBookReturn = function (req, res) {
        const params = {}
        params.bookID = req.body.bookID;
        baseController.callHelperPost(req, res, loanBookHelper.TransactionLoanBookReturn, params);
    };

    //----------------------------------------------------------------------------------------
    // Report Loan Book
    //----------------------------------------------------------------------------------------
    obj.getReportLoanBook = function (req, res) {
        
        res.render("loanbook/reportLoanBookList");
    };

    //----------------------------------------------------------------------------------------
    obj.getReportLoanBookList = function (req, res) {
        const params = {}

        baseController.callHelperList(req, res, loanBookHelper.ReportLoanBookList, params);
    };

    //----------------------------------------------------------------------------------------
    // obj.userAdd = function (req, res) {
    //     const params = {}

    //     params.userlogin = req.body.userlogin;
    //     params.password = req.body.password;
    //     params.level = req.body.level;
        
    //     baseController.callHelperPost(req, res, userHelper.UserAdd, params);
    // };

    return obj;
}
exports.loanBookController = loanBookController();
