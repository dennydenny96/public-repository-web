const app = require("./app").app
const authCheck = require("./middleware/auth-check").authCheck;

// 
const bodyParser = require("body-parser");
const contentType = bodyParser.urlencoded({ extended: false });
// const jsonParser = bodyParser.json();

// Controllers (route handlers)
const loginController = require("./controllers/account/loginController").loginController;
const logoutController = require("./controllers/account/logoutController").logoutController;
const dashboardController = require("./controllers/dashboardController").dashboardController;

// Project
const employeesController = require("./controllers/working/employeesController").employeesController;
const comboController = require("./controllers/comboController").comboController;

const userController = require("./controllers/admin/userController").userController;
const loanBookController = require("./controllers/loanbook/loanBookController").loanBookController;


// Account
/// get method
app.get("/", contentType, loginController.getLogin);
app.post("/", loginController.postLogin);
app.post("/registration", loginController.registerAccount);
app.post("/create/account/login/user", loginController.createaccountLoginUser);

app.get("/login", contentType, loginController.getLogin);
app.post("/login", loginController.postLogin);

app.get("/logout", contentType, authCheck.isAuthenticated, logoutController.doLogout);

app.get("/dashboard", contentType, authCheck.isAuthenticated, dashboardController.getDashboard);
app.get("/captcha", contentType, loginController.capcha);
app.post("/session", contentType, authCheck.isAuthenticatedXHR, dashboardController.checkSession);

app.post("/admin/change/lang", authCheck.isAuthenticatedXHR, dashboardController.changeLang);


//Test
//Combo
app.post("/combo/departments", authCheck.isAuthenticatedXHR, comboController.getComboDepartments);
app.post("/combo/jobtitles", authCheck.isAuthenticatedXHR, comboController.getComboJobTitles);
app.post("/combo/databook", authCheck.isAuthenticatedXHR, comboController.getComboDataBook);

//Menu
app.get("/menu/list", authCheck.isAuthenticated, authCheck.isAuthorized, employeesController.getMenu);
app.post("/menu/list", authCheck.isAuthenticatedXHR, employeesController.getMenuList);

//Employee
app.post("/get/employees/list", authCheck.isAuthenticated, employeesController.getEmployeesList)
app.post("/employee/add", authCheck.isAuthenticatedXHR, employeesController.employeeAdd);
app.post("/employee/edit", authCheck.isAuthenticatedXHR, employeesController.employeeEdit);
app.post("/employee/delete", authCheck.isAuthenticatedXHR, employeesController.employeeDelete);

// User
app.get("/userlist", authCheck.isAuthenticated, authCheck.isAuthorized, userController.getUser);
app.post("/userlist", authCheck.isAuthenticatedXHR, userController.getUserList);
app.post("/useradd", authCheck.isAuthenticatedXHR, userController.userAdd);

// Master Loan Book
app.get("/master/loan/book/list", authCheck.isAuthenticated, authCheck.isAuthorized, loanBookController.getMasterLoanBook);
app.post("/master/loan/book/list", authCheck.isAuthenticatedXHR, loanBookController.getMasterLoanBookList);
app.post("/master/loan/book/add", authCheck.isAuthenticatedXHR, loanBookController.masterLoanBookAdd);

// Transactions Loan Book
app.get("/transaction/loan/book/list", authCheck.isAuthenticated, authCheck.isAuthorized, loanBookController.getTransactionsLoanBook);
app.post("/transaction/loan/book/list", authCheck.isAuthenticatedXHR, loanBookController.getTransactionsLoanBookList);
app.post("/transaction/loan/book/borrow", authCheck.isAuthenticatedXHR, loanBookController.transactionLoanBookBorrow);
app.post("/transaction/loan/book/return", authCheck.isAuthenticatedXHR, loanBookController.transactionLoanBookReturn);

// Report Loan Book
app.get("/report/loan/book/list", authCheck.isAuthenticated, authCheck.isAuthorized, loanBookController.getReportLoanBook);
app.post("/report/loan/book/list", authCheck.isAuthenticatedXHR, loanBookController.getReportLoanBookList);


module.exports = app