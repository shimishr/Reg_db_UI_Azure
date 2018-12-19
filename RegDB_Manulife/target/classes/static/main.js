(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_listuser_listuser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/listuser/listuser.component */ "./src/app/components/listuser/listuser.component.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared_service/user.service */ "./src/app/shared_service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        children: [
            {
                path: '',
                component: _components_listuser_listuser_component__WEBPACK_IMPORTED_MODULE_6__["ListuserComponent"]
            },
            {
                path: 'op',
                component: _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]
            }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_listuser_listuser_component__WEBPACK_IMPORTED_MODULE_6__["ListuserComponent"],
                _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/listuser/listuser.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/listuser/listuser.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#myButton{\r\n    margin-left: -70%;\r\n  }\r\n  \r\n  .header{\r\n    background:#018343;height:90px;width:100%;\r\n    position:relative;\r\n    }\r\n  \r\n  .header div{\r\n      /* background: url(../images/headerLtImg3.png) no-repeat; */\r\n      width:157px;\r\n      height:29px;\r\n      position:absolute;\r\n      left:50%;\r\n      top:50%;\r\n      margin:-15px 0 0 -78px;\r\n      }\r\n  \r\n  #myTable{\r\n    border-radius: 11px;\r\n}\r\n  \r\n  .table-wrapper {\r\n        background: #fff;\r\n        padding: 20px 25px;\r\n        margin: 30px 0;\r\n\t\t    border-radius: 3px;\r\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\r\n    }\r\n  \r\n  .table-title {        \r\n\t\tpadding-bottom: 15px;\r\n    background:#018343;\r\n\t\tcolor: #fff;\r\n\t\tpadding: 16px 30px;\r\n\t\tmargin: -20px -25px 10px;\r\n\t\tborder-radius: 3px 3px 0 0;\r\n    }\r\n  \r\n  .table-title h2 {\r\n\t\tmargin: 5px 0 0;\r\n\t\tfont-size: 24px;\r\n\t}\r\n  \r\n  .table-title .btn-group {\r\n\t\tfloat: right;\r\n\t}\r\n  \r\n  .table-title .btn {\r\n\t\tcolor: #fff;\r\n\t\tfloat: right;\r\n\t\tfont-size: 13px;\r\n\t\tborder: none;\r\n\t\tmin-width: 50px;\r\n\t\tborder-radius: 2px;\r\n\t\tborder: none;\r\n\t\toutline: none !important;\r\n\t\tmargin-left: 10px;\r\n\t}\r\n  \r\n  .table-title .btn i {\r\n\t\tfloat: left;\r\n\t\tfont-size: 21px;\r\n\t\tmargin-right: 5px;\r\n\t}\r\n  \r\n  .table-title .btn span {\r\n\t\tfloat: left;\r\n\t\tmargin-top: 2px;\r\n\t}\r\n  \r\n  table.table tr th, table.table tr td {\r\n        border-color: #e9e9e9;\r\n\t\tpadding: 12px 15px;\r\n\t\tvertical-align: middle;\r\n    }\r\n  \r\n  table.table tr th:first-child {\r\n\t\twidth: 10px;\r\n\t}\r\n  \r\n  table.table tr th:last-child {\r\n\t\twidth: 100px;\r\n\t}\r\n  \r\n  table.table-striped tbody tr:nth-of-type(odd) {\r\n      color: #566787;\r\n      background: #f5f5f5;\r\n      font-family: 'Varela Round', sans-serif;\r\n      font-size: 13px;\r\n\t}\r\n  \r\n  table.table-striped.table-hover tbody tr:hover {\r\n\t\tbackground: #f5f5f5;\r\n\t}\r\n  \r\n  table.table th i {\r\n        font-size: 13px;\r\n        margin: 0 5px;\r\n        cursor: pointer;\r\n    }\r\n  \r\n  table.table td:last-child i {\r\n\t\topacity: 0.9;\r\n\t\tfont-size: 22px;\r\n        margin: 0 5px;\r\n    }\r\n  \r\n  table.table td button {\r\n\tfont-weight: bold;\r\n\tcolor: #566787;\r\n\tdisplay: inline-block;\r\n\ttext-decoration: none;\r\n    outline: none !important;\r\n    background-color: Transparent;\r\n    background-repeat:no-repeat;\r\n    border: none;\r\n\t}\r\n  \r\n  table.table td button:hover {\r\n\t\tcolor: #2196F3;\r\n\t}\r\n  \r\n  table.table td button.edit {\r\n        color: #FFC107;\r\n    }\r\n  \r\n  table.table td button.delete {\r\n        color: #F44336;\r\n    }\r\n  \r\n  table.table td i {\r\n        font-size: 19px;\r\n    }\r\n  \r\n  table.table .avatar {\r\n\t\tborder-radius: 50%;\r\n\t\tvertical-align: middle;\r\n\t\tmargin-right: 10px;\r\n\t}\r\n  \r\n  .pagination {\r\n        float: right;\r\n        margin: 0 0 5px;\r\n    }\r\n  \r\n  .pagination li a {\r\n        border: none;\r\n        font-size: 13px;\r\n        min-width: 30px;\r\n        min-height: 30px;\r\n        color: #999;\r\n        margin: 0 2px;\r\n        line-height: 30px;\r\n        border-radius: 2px !important;\r\n        text-align: center;\r\n        padding: 0 6px;\r\n    }\r\n  \r\n  .pagination li a:hover {\r\n        color: #666;\r\n    }\r\n  \r\n  .pagination li.active a, .pagination li.active a.page-link {\r\n        background: #03A9F4;\r\n    }\r\n  \r\n  .pagination li.active a:hover {        \r\n        background: #0397d6;\r\n    }\r\n  \r\n  .pagination li.disabled i {\r\n        color: #ccc;\r\n    }\r\n  \r\n  .pagination li i {\r\n        font-size: 16px;\r\n        padding-top: 6px\r\n    }\r\n  \r\n  .hint-text {\r\n        float: left;\r\n        margin-top: 10px;\r\n        font-size: 13px;\r\n    }\r\n  \r\n  /* Custom checkbox */\r\n  \r\n  .custom-checkbox {\r\n\t\tposition: relative;\r\n\t}\r\n  \r\n  .custom-checkbox input[type=\"checkbox\"] {    \r\n\t\topacity: 0;\r\n\t\tposition: absolute;\r\n\t\tmargin: 5px 0 0 3px;\r\n\t\tz-index: 9;\r\n\t}\r\n  \r\n  .custom-checkbox label:before{\r\n\t\twidth: 18px;\r\n\t\theight: 18px;\r\n\t}\r\n  \r\n  .custom-checkbox label:before {\r\n\t\tcontent: '';\r\n\t\tmargin-right: 10px;\r\n\t\tdisplay: inline-block;\r\n\t\tvertical-align: text-top;\r\n\t\tbackground: white;\r\n\t\tborder: 1px solid #bbb;\r\n\t\tborder-radius: 2px;\r\n\t\tbox-sizing: border-box;\r\n\t\tz-index: 2;\r\n\t}\r\n  \r\n  .custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n\t\tcontent: '';\r\n\t\tposition: absolute;\r\n\t\tleft: 6px;\r\n\t\ttop: 3px;\r\n\t\twidth: 6px;\r\n\t\theight: 11px;\r\n\t\tborder: solid #000;\r\n\t\tborder-width: 0 3px 3px 0;\r\n\t\t-webkit-transform: inherit;\r\n\t\t        transform: inherit;\r\n\t\tz-index: 3;\r\n\t\t-webkit-transform: rotateZ(45deg);\r\n\t\t        transform: rotateZ(45deg);\r\n\t}\r\n  \r\n  .custom-checkbox input[type=\"checkbox\"]:checked + label:before {\r\n\t\tborder-color: #03A9F4;\r\n\t\tbackground: #03A9F4;\r\n\t}\r\n  \r\n  .custom-checkbox input[type=\"checkbox\"]:checked + label:after {\r\n\t\tborder-color: #fff;\r\n\t}\r\n  \r\n  .custom-checkbox input[type=\"checkbox\"]:disabled + label:before {\r\n\t\tcolor: #b8b8b8;\r\n\t\tcursor: auto;\r\n\t\tbox-shadow: none;\r\n\t\tbackground: #ddd;\r\n\t}\r\n  \r\n  /* Modal styles */\r\n  \r\n  .modal .modal-dialog {\r\n\t\tmax-width: 400px;\r\n\t}\r\n  \r\n  .modal .modal-header, .modal .modal-body, .modal .modal-footer {\r\n\t\tpadding: 20px 30px;\r\n\t}\r\n  \r\n  .modal .modal-content {\r\n\t\tborder-radius: 3px;\r\n\t}\r\n  \r\n  .modal .modal-footer {\r\n\t\tbackground: #ecf0f1;\r\n\t\tborder-radius: 0 0 3px 3px;\r\n\t}\r\n  \r\n  .modal .modal-title {\r\n        display: inline-block;\r\n    }\r\n  \r\n  .modal .form-control {\r\n\t\tborder-radius: 2px;\r\n\t\tbox-shadow: none;\r\n\t\tborder-color: #dddddd;\r\n\t}\r\n  \r\n  .modal textarea.form-control {\r\n\t\tresize: vertical;\r\n\t}\r\n  \r\n  .modal .btn {\r\n\t\tborder-radius: 2px;\r\n\t\tmin-width: 100px;\r\n\t}\r\n  \r\n  .modal form label {\r\n\t\tfont-weight: normal;\r\n\t}\t\r\n"

/***/ }),

/***/ "./src/app/components/listuser/listuser.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/listuser/listuser.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n  <div class=\"header\"></div>\n  <br>\n  <table id=\"myTable\" class=\"table table-dark table-hover\">\n    <thead>\n      <th>FirstName</th>\n      <th>LastName</th>\n      <th>Employee Code</th>\n      <th>Operations</th>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{user.efname}}</td>\n        <td>{{user.elname}}</td>\n        <td>{{user.empCode}}</td>\n        <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user)\">Delete</button></td>\n        <td><button id=\"myButton\" class=\"btn btn-primary\" (click)=\"updateUser(user)\">Update</button></td>\n      </tr>\n    </tbody>\n  </table>\n    <td><button class=\"btn btn-primary\" (click)=\"newUser()\">New User</button></td>\n</div> -->\n\n<div class=\"container\">\n    <div class=\"table-wrapper\">\n        <div class=\"table-title\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n        <h2>Manage <b>PA Users</b></h2>\n      </div>\n      <div class=\"col-sm-6\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"newUser()\" data-toggle=\"modal\"><i class=\"material-icons\">&#xE147;</i> <span>Add New Employee</span></button>\n      </div>\n            </div>\n        </div>\n        <table class=\"table table-striped table-hover\">\n            <thead style=\"font-family:'Varela Round', sans-serif;font-size: 15px;color: #566787 \">\n                <tr>\n                    <th>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"selectAll\">\n                        <label for=\"selectAll\"></label>\n                      </span>\n                    </th>\n                    <th>Display Name</th>\n                    <th>Surname</th>\n                    <th>Given Name</th>\n                    <th>User Principal Name</th>\n                    <th>Actions <br>(Edit/Del)</th>\n                </tr>\n            </thead>\n            <tbody style=\"font-family:'Varela Round', sans-serif;font-size:13px;color: #566787;\">\n                <tr *ngFor=\"let user of requests\">\n                    <td>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n                        <label for=\"checkbox1\"></label>\n                      </span>\n                    </td>\n                    <td>{{user.value[0].displayName}}</td>\n                    <td>{{user.value[0].surname}}</td>\n                    <td>{{user.value[0].givenName}}</td>\n                    <td>{{user.value[0].userPrincipalName}}</td>\n                    <td>\n                        <button class=\"edit\" (click)=\"updateUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-edit\" data-toggle=\"tooltip\" title=\"Edit\"></i></button>\n                        <button class=\"delete\" (click)=\"deleteUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" data-toggle=\"tooltip\" title=\"Delete\" style=\"position: absolute;margin-top: -1.5%;\"></i></button>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let user of requests\">\n                    <td>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n                        <label for=\"checkbox1\"></label>\n                      </span>\n                    </td>\n                    <td>{{user.value[1].displayName}}</td>\n                    <td>{{user.value[1].surname}}</td>\n                    <td>{{user.value[1].givenName}}</td>\n                    <td>{{user.value[1].userPrincipalName}}</td>\n                    <td>\n                        <button class=\"edit\" (click)=\"updateUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-edit\" data-toggle=\"tooltip\" title=\"Edit\"></i></button>\n                        <button class=\"delete\" (click)=\"deleteUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" data-toggle=\"tooltip\" title=\"Delete\" style=\"position: absolute;margin-top: -1.5%;\"></i></button>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let user of requests\">\n                    <td>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n                        <label for=\"checkbox1\"></label>\n                      </span>\n                    </td>\n                    <td>{{user.value[2].displayName}}</td>\n                    <td>{{user.value[2].surname}}</td>\n                    <td>{{user.value[2].givenName}}</td>\n                    <td>{{user.value[2].userPrincipalName}}</td>\n                    <td>\n                        <button class=\"edit\" (click)=\"updateUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-edit\" data-toggle=\"tooltip\" title=\"Edit\"></i></button>\n                        <button class=\"delete\" (click)=\"deleteUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" data-toggle=\"tooltip\" title=\"Delete\" style=\"position: absolute;margin-top: -1.5%;\"></i></button>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let user of requests\">\n                    <td>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n                        <label for=\"checkbox1\"></label>\n                      </span>\n                    </td>\n                    <td>{{user.value[3].displayName}}</td>\n                    <td>{{user.value[3].surname}}</td>\n                    <td>{{user.value[3].givenName}}</td>\n                    <td>{{user.value[3].userPrincipalName}}</td>\n                    <td>\n                        <button class=\"edit\" (click)=\"updateUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-edit\" data-toggle=\"tooltip\" title=\"Edit\"></i></button>\n                        <button class=\"delete\" (click)=\"deleteUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" data-toggle=\"tooltip\" title=\"Delete\" style=\"position: absolute;margin-top: -1.5%;\"></i></button>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let user of requests\">\n                    <td>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n                        <label for=\"checkbox1\"></label>\n                      </span>\n                    </td>\n                    <td>{{user.value[4].displayName}}</td>\n                    <td>{{user.value[4].surname}}</td>\n                    <td>{{user.value[4].givenName}}</td>\n                    <td>{{user.value[4].userPrincipalName}}</td>\n                    <td>\n                        <button class=\"edit\" (click)=\"updateUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-edit\" data-toggle=\"tooltip\" title=\"Edit\"></i></button>\n                        <button class=\"delete\" (click)=\"deleteUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" data-toggle=\"tooltip\" title=\"Delete\" style=\"position: absolute;margin-top: -1.5%;\"></i></button>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let user of requests\">\n                    <td>\n                      <span class=\"custom-checkbox\">\n                        <input type=\"checkbox\" id=\"checkbox1\" name=\"options[]\" value=\"1\">\n                        <label for=\"checkbox1\"></label>\n                      </span>\n                    </td>\n                    <td>{{user.value[5].displayName}}</td>\n                    <td>{{user.value[5].surname}}</td>\n                    <td>{{user.value[5].givenName}}</td>\n                    <td>{{user.value[5].userPrincipalName}}</td>\n                    <td>\n                        <button class=\"edit\" (click)=\"updateUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-edit\" data-toggle=\"tooltip\" title=\"Edit\"></i></button>\n                        <button class=\"delete\" (click)=\"deleteUser(user)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" data-toggle=\"tooltip\" title=\"Delete\" style=\"position: absolute;margin-top: -1.5%;\"></i></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n            <div class=\"clearfix\" style=\"color: #566787;\">\n            <div class=\"hint-text\">Showing <b>1</b> out of <b>25</b> entries</div>\n            <ul class=\"pagination\">\n                <li class=\"page-item disabled\"><a href=\"#\">Previous</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">1</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">2</a></li>\n                <li class=\"page-item active\"><a href=\"#\" class=\"page-link\">3</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">4</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">5</a></li>\n                <li class=\"page-item\"><a href=\"#\" class=\"page-link\">Next</a></li>\n            </ul>\n        </div>\n    </div>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/components/listuser/listuser.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/listuser/listuser.component.ts ***!
  \***********************************************************/
/*! exports provided: ListuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListuserComponent", function() { return ListuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListuserComponent = /** @class */ (function () {
    function ListuserComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.netImage = "../assets/headerLtImg3.png";
    }
    ListuserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getAllUserDetails().subscribe(function (res) {
            _this.requests = res.json();
            _this.requests = Array.of(_this.requests);
            // console.log("Prativani",this.requests);
            _this.users = JSON.parse(res["_body"]);
            var temp_data = JSON.parse(res["_body"]);
            console.log("Data from Azure AD", temp_data);
        });
    };
    // deleteUser(user)
    // {
    //   this._userService.deleteUserDetails(user.empCode).subscribe((data)=>{
    //     this.users.splice(this.users.indexOf(user),1);
    //   })
    // }
    ListuserComponent.prototype.updateUser = function (user) {
        this._userService.setter(user);
        this._router.navigate(['/op']);
    };
    ListuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listuser',
            template: __webpack_require__(/*! ./listuser.component.html */ "./src/app/components/listuser/listuser.component.html"),
            styles: [__webpack_require__(/*! ./listuser.component.css */ "./src/app/components/listuser/listuser.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListuserComponent);
    return ListuserComponent;
}());



/***/ }),

/***/ "./src/app/components/user-form/user-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    box-sizing:border-box;\r\n  }\r\n  \r\n  .container{\r\n    max-width: 1000px;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding: 1em;\r\n  }\r\n  \r\n  .wrapper {\r\n      width: 100%;\r\n      box-sizing: border-box;\r\n          border: 1px solid #ccc;\r\n      padding: 20px;\r\n    }\r\n  \r\n  /* content */\r\n  \r\n  .content {\r\n    text-align: center;\r\n  }\r\n  \r\n  .content h1 {\r\n    letter-spacing: 1px;\r\n  }\r\n  \r\n  /* form */\r\n  \r\n  .form {\r\n    width: 100%;\r\n    margin: 25px 0;\r\n  }\r\n  \r\n  .form button:hover{\r\n    color: #000;\r\n    outline: 0;\r\n  }\r\n  \r\n  #radio{\r\n    margin-left: 2%;\r\n  }\r\n  \r\n  .btn {\r\n    width: 200px;\r\n    padding: 10px 0;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    letter-spacing: 5px;\r\n    cursor: pointer; /* FF3.6+ */ /* Chrome,Safari4+ */ /* Chrome10+,Safari5.1+ */ /* Opera 11.10+ */ /* IE10+ */\r\n  background: linear-gradient(to bottom,  #57975a 0%,#58a45a 4%,#56a458 11%,#549f5a 15%,#579e58 19%,#559e59 22%,#509c51 30%,#4f924f 44%,#47894b 63%,#478248 70%,#488248 74%,#448146 78%,#3f793f 96%,#57975a 100%); /* W3C */\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  border-radius: 6px;\r\n  border: 1px solid #579858;\r\n  }\r\n  \r\n  .form input[type=\"text\"],\r\n  .form textarea {\r\n  border: 1px solid #aaaaaa;\r\n    border-radius:6px;\r\n    padding: 5px 5px;\r\n    outline: none;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    transition: all 0.2s ease;\r\n  }\r\n  \r\n  .form input:focus,\r\n  .form textarea:focus {\r\n    border-color: #ccc;\r\n    outline: none;\r\n    box-shadow: inset 0 1px 1px #ccc,\r\n      0 0 8px #ccc;\r\n  }\r\n  \r\n  label,input{\r\n    margin-bottom:10px;\r\n    /* text-transform: capitalize; */\r\n  }\r\n  \r\n  .top-form1,\r\n  .top-form2,\r\n  .middle-form{\r\n    width: 100%;\r\n    min-height: 65px;\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  /* top-contact */\r\n  \r\n  .top-form1 .inner-form1 {\r\n    width: 47%;\r\n    float: left;\r\n    margin-right: 5%;\r\n  }\r\n  \r\n  .top-form1 .inner-form1:last-child {\r\n    margin-right: 0;\r\n  }\r\n  \r\n  .top-form2 .inner-form2 {\r\n    width: 47%;\r\n    float: left;\r\n    margin-right: 5%;\r\n  }\r\n  \r\n  .top-form2 .inner-form2:last-child {\r\n    margin-right: 0;\r\n  }\r\n  \r\n  /* middle-form */\r\n  \r\n  .middle-form {\r\n    clear: both;\r\n  }\r\n  \r\n  .bottom-form textarea {\r\n    height: 120px;\r\n  }\r\n  \r\n  ::-webkit-input-placeholder {\r\n    /* Chrome/Opera/Safari */\r\n    font-family: \"Kavivanar\", cursive;\r\n  }\r\n  \r\n  ::-moz-placeholder {\r\n    /* Firefox 19+ */\r\n    font-family: \"Kavivanar\", cursive;\r\n  }\r\n  \r\n  :-ms-input-placeholder {\r\n    /* IE 10+ */\r\n    font-family: \"Kavivanar\", cursive;\r\n  }\r\n  \r\n  @media screen and (max-width: 460px) {\r\n    .wrapper {\r\n      margin: 25px auto 0;\r\n    }\r\n  .top-form1 .inner-form1,.top-form2 .inner-form2{width:100%;}\r\n    \r\n    .top-form .inner-form {\r\n      width: 100%;\r\n      margin: 5px 0;\r\n    }\r\n    .top-form,\r\n    .middle-form,\r\n    .bottom-form {\r\n      margin: 5px 0;\r\n    }\r\n    .form {\r\n      margin-top: 10px;\r\n    }\r\n    .form input[type=\"text\"],\r\n    .form textarea {\r\n       width: 100%;\r\n       box-sizing: border-box;\r\n       \r\n    }\r\n  }\r\n  \r\n  .header{\r\n    background:#018343;height:90px;width:100%;\r\n    position:relative;\r\n    }\r\n  \r\n  .header div{\r\n      /* background: url(../images/headerLtImg3.png) no-repeat; */\r\n      width:157px;\r\n      height:29px;\r\n      position:absolute;\r\n      left:50%;\r\n      top:50%;\r\n      margin:-15px 0 0 -78px;\r\n      }\r\n  \r\n  input[type=\"text\"]{ \r\n    box-shadow: inset 0 0 10px #ccc;\r\n  }\r\n  \r\n  p{\r\n    font-weight:bold;\r\n    border-bottom:1px \r\n    solid #ccc;\r\n  }\r\n  \r\n  #mode,#mode1,#mode2,#mode3,#mode4,#mode5{\r\n  position: relative;\r\n  margin-top: 4px\\9;\r\n  margin-left: 3px;\r\n  }\r\n  \r\n  /* .success-popup  {\r\n    transition: .3s ease all;\r\n    font-family: 'Roboto', sans-serif;\r\n  } */\r\n  \r\n  /*--thank you pop starts here--*/\r\n  \r\n  .thank-you-pop{\r\n      width:100%;\r\n       padding:20px;\r\n      text-align:center;\r\n  }\r\n  \r\n  .thank-you-pop img{\r\n      width:76px;\r\n      height:auto;\r\n      margin:0 auto;\r\n      display:block;\r\n      margin-bottom:25px;\r\n  }\r\n  \r\n  .thank-you-pop h1{\r\n      font-size: 42px;\r\n      margin-bottom: 25px;\r\n      color:#5C5C5C;\r\n  }\r\n  \r\n  .thank-you-pop p{\r\n      font-size: 20px;\r\n      margin-bottom: 27px;\r\n       color:#5C5C5C;\r\n  }\r\n  \r\n  .thank-you-pop h3.cupon-pop{\r\n      font-size: 25px;\r\n      margin-bottom: 40px;\r\n      color:#222;\r\n      display:inline-block;\r\n      text-align:center;\r\n      padding:10px 20px;\r\n      border:2px dashed #222;\r\n      clear:both;\r\n      font-weight:normal;\r\n  }\r\n  \r\n  .thank-you-pop h3.cupon-pop span{\r\n      color:#03A9F4;\r\n  }\r\n  \r\n  .thank-you-pop a{\r\n      display: inline-block;\r\n      margin: 0 auto;\r\n      padding: 9px 20px;\r\n      color: #fff;\r\n      text-transform: uppercase;\r\n      font-size: 14px;\r\n      background-color: #8BC34A;\r\n      border-radius: 17px;\r\n  }\r\n  \r\n  .thank-you-pop a i{\r\n      margin-right:5px;\r\n      color:#fff;\r\n  }\r\n  \r\n  #ignismyModal .modal-header{\r\n      border:0px;\r\n  }\r\n  \r\n  /*--thank you pop ends here--*/\r\n  \r\n  .form-control{\r\n  height: 50%;\r\n }\r\n  "

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n        <meta charset=\"UTF-8\">\n        <title>How to create the contact form using HTML and CSS</title>\n    </head> \n    <div class=\"header\">\n        <div>\n                <img [src]=\"netImage\" class=\"figure-img img-fluid rounded\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"wrapper\">\n            <div class=\"content\">\n                <h1>CONTACT FORM</h1>\n                <span>Connect with us by sending your views.</span>\n            </div>\n            <div class=\"form\">\n                    <form id= \"formNewUser\" name=\"formNewUser\" #frm = \"ngForm\" (ngSubmit) = \"addUser(frm.value)\">\n                        <div class=\"top-form1\">\n                           <label class=\"radio-inline\" for=\"radio120\">accountEnabled?</label>\n                            <label class=\"radio-inline\" id=\"radio\" for=\"radio120\">\n                                <input type=\"radio\" id=\"accountEnabled\" required name=\"accountEnabled\" [value]=\"true\" [(ngModel)]=\"user.accountEnabled\">Yes\n                            </label> \n                            <label class=\"radio-inline\" id=\"radio\" for=\"radio121\">\n                                <input type=\"radio\" id=\"accountEnabled\" required name=\"accountEnabled\" [value]=\"false\" [(ngModel)]=\"user.accountEnabled\">No\n                            </label>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t <label>city </label>\n                                <input type=\"text\" id=\"city\" required name=\"city\" class=\"form-control\" [(ngModel)]=\"user.city\" placeholder=\"city\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <label>country </label>\n                                <input type=\"text\" id=\"country\" required name=\"country\" class=\"form-control\" [(ngModel)]=\"user.country\" placeholder=\"country\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <label>department </label>\n                                <input type=\"text\" id=\"department\" required name=\"department\" class=\"form-control\" [(ngModel)]=\"user.department\" placeholder=\"department\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <label>displayName </label>\n                                <input type=\"text\" id=\"displayName\" required name=\"displayName\" class=\"form-control\" [(ngModel)]=\"user.displayName\" placeholder=\"displayName\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <label>givenName </label>\n                                <input type=\"text\" id=\"givenName\" required name=\"givenName\" class=\"form-control\" [(ngModel)]=\"user.givenName\" placeholder=\"givenName\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>jobTitle </label>\n                                <input type=\"text\" id=\"jobTitle\" required name=\"jobTitle\" class=\"form-control\" [(ngModel)]=\"user.jobTitle\" placeholder=\"jobTitle\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>mailNickname </label>\n                                <input type=\"text\" id=\"mailNickname\" required name=\"mailNickname\" class=\"form-control\" [(ngModel)]=\"user.mailNickname\" placeholder=\"mailNickname\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>passwordPolicies </label>\n                                <input type=\"text\" id=\"passwordPolicies\" required name=\"passwordPolicies\" class=\"form-control\" [(ngModel)]=\"user.passwordPolicies\" placeholder=\"passwordPolicies\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>password </label>\n                                <input type=\"text\" id=\"password\" required name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" placeholder=\"password\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <label class=\"radio-inline\" for=\"radio120\">forceChangePasswordNextSignIn?</label>\n                            <label class=\"radio-inline\" id=\"radio\" for=\"radio120\">\n                                <input type=\"radio\" id=\"forceChangePasswordNextSignIn\" required name=\"forceChangePasswordNextSignIn\" [value]=\"true\" [(ngModel)]=\"user.forceChangePasswordNextSignIn\">Yes\n                            </label> \n                            <label class=\"radio-inline\" id=\"radio\" for=\"radio121\">\n                                <input type=\"radio\" id=\"forceChangePasswordNextSignIn\" required name=\"forceChangePasswordNextSignIn\" [value]=\"false\" [(ngModel)]=\"user.forceChangePasswordNextSignIn\">No\n                            </label>\n\t\t\t\t\t\t\t<br>\t\n\t\t\t\t\t\t\t<label>officeLocation </label>\n                                <input type=\"text\" id=\"officeLocation\" required name=\"officeLocation\" class=\"form-control\" [(ngModel)]=\"user.officeLocation\" placeholder=\"officeLocation\">\n\t\t\t\t\t\t\t<label>postalCode </label>\n                                <input type=\"text\" id=\"postalCode\" required name=\"postalCode\" class=\"form-control\" [(ngModel)]=\"user.postalCode\" placeholder=\"postalCode\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>preferredLanguage </label>\n                                <input type=\"text\" id=\"preferredLanguage\" required name=\"preferredLanguage\" class=\"form-control\" [(ngModel)]=\"user.preferredLanguage\" placeholder=\"preferredLanguage\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>state </label>\n                                <input type=\"text\" id=\"state\" required name=\"state\" class=\"form-control\" [(ngModel)]=\"user.state\" placeholder=\"state\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>streetAddress </label>\n                                <input type=\"text\" id=\"streetAddress\" required name=\"streetAddress\" class=\"form-control\" [(ngModel)]=\"user.streetAddress\" placeholder=\"streetAddress\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>surname </label>\n                                <input type=\"text\" id=\"surname\" required name=\"surname\" class=\"form-control\" [(ngModel)]=\"user.surname\" placeholder=\"surname\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>mobilePhone </label>\n                                <input type=\"text\" id=\"mobilePhone\" required name=\"mobilePhone\" class=\"form-control\" [(ngModel)]=\"user.mobilePhone\" placeholder=\"mobilePhone\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>usageLocation </label>\n                                <input type=\"text\" id=\"usageLocation\" required name=\"usageLocation\" class=\"form-control\" [(ngModel)]=\"user.usageLocation\" placeholder=\"usageLocation\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<label>userPrincipalName </label>\n                                <input type=\"text\" id=\"userPrincipalName\" required name=\"userPrincipalName\" class=\"form-control\" [(ngModel)]=\"user.userPrincipalName\" placeholder=\"userPrincipalName\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n                        </div>\n                        <div class=\"top-form2\">\n                           \n                        </div>\n                        <div class=\"middle-form\">\n\n                        </div>\n                        <div class=\"bottom-form\">\n                            \n                        </div>\n                        <button type=\"submit\" name=\"button\" class=\"btn\" [disabled]=\"frm.invalid\">Add user</button>\n                        {{frm.value | json}}\n                    </form>\n                </div>\n        </div>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.ts ***!
  \*************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared_service/user.service */ "./src/app/shared_service/user.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(_userService, _router, http) {
        this._userService = _userService;
        this._router = _router;
        this.http = http;
        this.netImage = "../assets/headerLtImg3.png";
    }
    UserFormComponent.prototype.addUser = function () {
        var _this = this;
        /*changed id=empCode*/
        if (this.user.empCode == undefined) {
            this._userService.updateUserDetails(this.user).subscribe(function (user) {
                console.log(user);
                _this._router.navigate(['/']);
            });
        }
        else {
            this._userService.SaveUserDetails(this.user).subscribe(function (user) {
                console.log("Details:", user);
                _this._router.navigate(['/']);
            });
        }
    };
    UserFormComponent.prototype.ngOnInit = function () {
        this.user = this._userService.getter();
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/components/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/components/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/shared_service/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared_service/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        /* private baseUrl:string='http:localhost:8085'; */
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IkFRQUJBQUFBQUFDNXVuYTBFVUZnVElGOEVsYXh0V2pUYktLOUdudHBjaDVrdHY3M283ZzYtUzdXY09YSWp6Y09jbFk4RW1XcDM3UzZxaFE4bGYwZUoteU5fOEpnVVp4dVloMkg0Y1VPWGVWR1RuVGk2VHo0ZFNBQSIsImFsZyI6IlJTMjU2IiwieDV0IjoibmJDd1cxMXczWGtCLXhVYVh3S1JTTGpNSEdRIiwia2lkIjoibmJDd1cxMXczWGtCLXhVYVh3S1JTTGpNSEdRIn0.eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84OThmNDVmMy02OTE5LTRjOTgtODJlNi02MjFiYmZmYTFjZjAvIiwiaWF0IjoxNTQ1MjIzMDQ1LCJuYmYiOjE1NDUyMjMwNDUsImV4cCI6MTU0NTIyNjk0NSwiYWlvIjoiNDJSZ1lNZ0tEbFZYMnBIMnE5cFhlamJ6MzVtWkFBPT0iLCJhcHBfZGlzcGxheW5hbWUiOiJwb3N0bWFuX1Rlc3QiLCJhcHBpZCI6ImU3MWI3NzU4LTRkYTQtNDM0My1hNThlLTJiOGU1NDRiMjFjMCIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0Lzg5OGY0NWYzLTY5MTktNGM5OC04MmU2LTYyMWJiZmZhMWNmMC8iLCJvaWQiOiIyMGQzOGNlOC02YzI0LTQyMWQtOGYxMS05ZDA5NDBhYzU2NzQiLCJyb2xlcyI6WyJVc2VyLlJlYWRXcml0ZS5BbGwiLCJEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCIsIkRpcmVjdG9yeS5SZWFkLkFsbCIsIlVzZXIuUmVhZC5BbGwiXSwic3ViIjoiMjBkMzhjZTgtNmMyNC00MjFkLThmMTEtOWQwOTQwYWM1Njc0IiwidGlkIjoiODk4ZjQ1ZjMtNjkxOS00Yzk4LTgyZTYtNjIxYmJmZmExY2YwIiwidXRpIjoiVzB5TnN1dHpJa0doVUNOQlRsTUhBQSIsInZlciI6IjEuMCIsInhtc190Y2R0IjoxNTI1ODM3OTcyfQ.r4yQfhlGaKLMPpfAV3Asc01MO1WqQbQ1dqB1NcKA8pf-B_BZop_oiTIhJEFo_7qgPJSDRUsCxshhp-0Un47D0VquPD-V27npsp2NUhDmd947Fahymzs8gTagWkXXtRLqQ8hmHneQdg--H-3zr6K9fycXMB_DkoACjio_cogVhvGFOrZrZp3FQs0x0gAioVw9H3K0XcTnnnsn-SdodxX_lv6vspEz47a3bTvzzFWJpUH_FUCqFisnv6vl7tIMym5Kjpw_bWWz92Zo2_wv3Um3LywSRwBghW_njFMGWSu4xLxQKpTKmLiYChL7foWUiWRxAi2TOToyn60jLXJVVilWpQ' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.getAllUserDetails = function () {
        return this._http.get("https://graph.microsoft.com/v1.0/users", this.options);
    };
    UserService.prototype.deleteUserDetails = function (empCode) {
        return this._http.delete("https://my-regdb-zuul-service-dev.apps.eas.pcf.manulife.com/producer/deleteUserDetails?empCode=" + empCode, this.options);
    };
    UserService.prototype.SaveUserDetails = function (user) {
        return this._http.post("https://graph.microsoft.com/v1.0/users", JSON.stringify(user), this.options);
    };
    UserService.prototype.updateUserDetails = function (user) {
        return this._http.put("https://graph.microsoft.com/v1.0/users", JSON.stringify(user), this.options);
    };
    UserService.prototype.setter = function (user) {
        this.user = user;
    };
    UserService.prototype.getter = function () {
        return this.user;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\shimishr\Code\popup\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map