"use strict";

const Config = require("../../config/bo-config.json");
const cryptoJS = require("crypto-js");
const cryptoSecret = Config.cryptoSecret;
const account = require("./../../helper/userHelper").userHelper;
const appConfig1 = require("../../appConfig");
const baseController = require("./../baseController").baseController;

function loginController() {
    var obj = {};

    //----------------------------------------------------------------------------------------
    obj.registerAccount = function (req, res) {
        const params = {}

        params.mobileNumber = req.body.mobileNumber;
        params.firstName = req.body.firstName;
        params.lastName = req.body.lastName;
        params.dateOfBirth = req.body.dateOfBirth;
        params.gender = req.body.gender;
        params.email = req.body.email;
        
        baseController.callHelperRegistration(req, res, account.RegisterAccount, params);
    };

    //----------------------------------------------------------------------------------------
    obj.createaccountLoginUser = function (req, res) {
        const params = {}

        params.userName = req.body.userName;
        params.password = req.body.password;
        params.level = req.body.level;
        params.mobileNumber = req.body.mobileNumber;
        
        baseController.callHelperRegistration(req, res, account.CreateaccountLoginUser, params);
    };

    /* -------------------------------------------------------------------------------------*/
    obj.getLogin = function (req, res) {
        const formData = {
            username: "",
            password: ""
        };
        const token = req.cookies["token"];
        if (token) {
            return res.redirect("/dashboard");
        }
        const cap = req.cookies["cap"];
        let capcha = false;
        if (cap) {
            capcha = true;
        }

        const lang = {};
        req.body.lang = req.body.lang && req.body.lang != "" ? req.body.lang : "en-us";
        lang.label = require("../../config/language/"+req.body.lang+".json");
        res.render("account/login", {
            data: formData,
            capcha: capcha,
            lang: lang
        });
    };

    /* -------------------------------------------------------------------------------------*/
    obj.postLogin = (req, res, next) => {
        req.check("username", "Maximum length of username is 20").isLength({ max: 20 });
        req.check("password", "Maximum length of password is 20").isLength({ max: 20 });
        const err = req.validationErrors();
        const lang = {};
        req.body.lang = req.body.lang && req.body.lang != "" ? req.body.lang : "en-us";
        lang.label = require("../../config/language/"+req.body.lang+".json");

        if (err) {
            req.flash("errors", err);
            return res.render("account/login", { data: req.body, lang: lang });
        }
        const cap = req.cookies["cap"];
        if (cap) {
            const decap = cryptoJS.AES.decrypt(cap, cryptoSecret).toString(cryptoJS.enc.Utf8);
            if (decap != req.body.capcha) {
                req.flash("errors", "Captcha does not match.");
                return res.render("account/login", { data: req.body, capcha: true, lang: lang });
            }
        }

        account.SignIn(req, (err, datatoken) => {
            if (datatoken == "auth") {
                if (err) {
                    req.flash("auth", err);
                }
                return res.render("account/login", { data: req.body, auth: "Y", lang: lang });
            }
            let cap = false;
            if (datatoken == "capcha") {
                cap = true;
            }

            if (err) {
                req.flash("errors", datatoken);
                
                return res.render("account/login", { data: req.body, capcha: cap, lang: lang});
            }
            const cookieTimeout = Config.cookieTimeOut;
            return res.status(200)
                // .cookie("token", datatoken, {maxAge: cookieTimeout})
                .cookie("token", datatoken)
                .clearCookie("cap")
                .redirect("/dashboard");
        });
    };

    /* -------------------------------------------------------------------------------------*/
    obj.capcha = function (req, res, next) {
        const captcha = require("../captcha/index.js").create({
            width: 150,
            height: 45,
            fontSize: 30,
            size: 4,
        });
        res.type("svg");
        const data = captcha.image(req, res);
        const cap = cryptoJS.AES.encrypt(data.text, cryptoSecret).toString();
        return res.status(200).cookie("cap", cap).send(data.data);
    }; 
    
    return obj;
}
exports.loginController = loginController();