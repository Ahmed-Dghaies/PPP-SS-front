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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/Authentification/login/login.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Components/Authentification/login/login.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/Authentification/login/login.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Components/Authentification/login/login.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <span class=\"anchor\" id=\"formLogin\"></span>\n\n      <!-- form card login -->\n      <div class=\"card rounded-0\">\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Login</h3>\n        </div>\n        <div class=\"card-body\">\n          <form class=\"form\">\n            <div class=\"form-group\">\n              <label for=\"uname1\">Username</label>\n              <input type=\"text\" [(ngModel)]=\"loginUserData.email\" name=\"email\" class=\"form-control rounded-0\" required>\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" [(ngModel)]=\"loginUserData.password\" name=\"password\" class=\"form-control rounded-0\"  required>\n            </div>\n            <button type=\"button\" (click)=\"loginUser()\" class=\"btn btn-success float-right\">Login</button>\n          </form>\n        </div>\n        <!--/card-block-->\n      </div>\n      <!-- /form card login -->\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/Authentification/login/login.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/Authentification/login/login.component.ts ***!
  \**********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, route) {
        this.auth = auth;
        this.route = route;
        this.loginUserData = { email: '', password: '' };
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn()) {
            this.route.navigate(['/home']);
        }
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.auth.loginUser(this.loginUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.route.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/Components/Authentification/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Components/Authentification/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/Authentification/register/register.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/Authentification/register/register.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvQXV0aGVudGlmaWNhdGlvbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/Authentification/register/register.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Components/Authentification/register/register.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"py-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6 mx-auto\">\n      <span class=\"anchor\" id=\"formLogin\"></span>\n\n      <!-- form card login -->\n      <div class=\"card rounded-0\">\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Register</h3>\n        </div>\n        <div class=\"card-body\">\n          <form class=\"form\">\n            <div class=\"form-group\">\n              <label for=\"uname1\">Username</label>\n              <input type=\"text\" [(ngModel)]=\"registerUserData.email\" name=\"email\" class=\"form-control rounded-0\" required>\n            </div>\n            <div class=\"form-group\">\n              <label>Password</label>\n              <input type=\"password\" [(ngModel)]=\"registerUserData.password\" name=\"password\" class=\"form-control rounded-0\"  required>\n            </div>\n            <button type=\"button\" (click)=\"registerUser()\" class=\"btn btn-primary float-right\">Register</button>\n          </form>\n        </div>\n        <!--/card-block-->\n      </div>\n      <!-- /form card login -->\n\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/Authentification/register/register.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Components/Authentification/register/register.component.ts ***!
  \****************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.registerUserData = { email: '', password: '' };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        this.auth.registerUser(this.registerUserData)
            .subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/Components/Authentification/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/Components/Authentification/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/Shared/confirm-delete/confirm-delete.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvU2hhcmVkL2NvbmZpcm0tZGVsZXRlL2NvbmZpcm0tZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Components/Shared/confirm-delete/confirm-delete.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n  <p>Voulez-vous vraiment supprimer ce {{msg}}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"annuler()\">Annuler</button>\r\n  <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"delete()\">Ok</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteComponent", function() { return ConfirmDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/client.service */ "./src/app/shared/services/client.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/carte-bon-type.service */ "./src/app/shared/services/carte-bon-type.service.ts");
/* harmony import */ var src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/releveIndex.service */ "./src/app/shared/services/releveIndex.service.ts");
/* harmony import */ var src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/index.service */ "./src/app/shared/services/index.service.ts");








var ConfirmDeleteComponent = /** @class */ (function () {
    function ConfirmDeleteComponent(dialogRef, data, clientService, cardTypeService, releveIndexService, indexService, notifService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.clientService = clientService;
        this.cardTypeService = cardTypeService;
        this.releveIndexService = releveIndexService;
        this.indexService = indexService;
        this.notifService = notifService;
        this.id = data.id;
        this.msg = data.msg;
    }
    ConfirmDeleteComponent.prototype.ngOnInit = function () {
    };
    ConfirmDeleteComponent.prototype.delete = function () {
        if (this.msg === 'client') {
            this.deleteClient();
        }
        else if (this.msg === 'type carte bon') {
            this.deleteCardType();
        }
        else if (this.msg === 'relevé index') {
            this.deleteReleveIndex();
        }
        else if (this.msg === 'index') {
            this.deleteIndex();
        }
    };
    ConfirmDeleteComponent.prototype.annuler = function () {
        this.dialogRef.close();
    };
    ConfirmDeleteComponent.prototype.deleteReleveIndex = function () {
        var _this = this;
        this.releveIndexService.deleteReleveIndex(this.id).subscribe(function (res) {
            _this.releveIndexService.getReleveIndexsList();
            _this.dialogRef.close();
            _this.notifService.success(_this.msg + " supprim\u00E9 avec succ\u00E9s");
        }, function (err) {
            console.log(err);
        });
    };
    ConfirmDeleteComponent.prototype.deleteIndex = function () {
        var _this = this;
        this.indexService.deleteIndex(this.id).subscribe(function (res) {
            _this.indexService.getIndexList();
            _this.dialogRef.close();
            _this.notifService.success(_this.msg + " supprim\u00E9 avec succ\u00E9s");
        }, function (err) {
            console.log(err);
        });
    };
    ConfirmDeleteComponent.prototype.deleteClient = function () {
        var _this = this;
        this.clientService.deleteClient(this.id).subscribe(function (res) {
            _this.clientService.getClientsList();
            _this.dialogRef.close();
            _this.notifService.success(_this.msg + " supprim\u00E9 avec succ\u00E9s");
        }, function (err) {
            console.log(err);
        });
    };
    ConfirmDeleteComponent.prototype.deleteCardType = function () {
        var _this = this;
        this.cardTypeService.deleteCardType(this.id).subscribe(function (res) {
            _this.cardTypeService.getCardTypesList();
            _this.dialogRef.close();
            _this.notifService.success(_this.msg + " supprim\u00E9 avec succ\u00E9s");
        }, function (err) {
            console.log(err);
        });
    };
    ConfirmDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-delete',
            template: __webpack_require__(/*! ./confirm-delete.component.html */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.html"),
            styles: [__webpack_require__(/*! ./confirm-delete.component.css */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            src_app_shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_5__["CarteBonTypeService"],
            src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_6__["ReleveIndexService"],
            src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_7__["IndexService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], ConfirmDeleteComponent);
    return ConfirmDeleteComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9SZWNldHRlL3JlbGV2ZUluZGV4LWxpc3QvcmVsZXZlSW5kZXgtYWRkL3JlbGV2ZUluZGV4LWFkZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Ajouter relevé index</span>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\" (submit)=\"addReleveIndex()\">\n  <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n    <mat-grid-tile>\n      <div class=\"controles-container\">\n        <mat-form-field>\n          <mat-label>Reference</mat-label>\n          <mat-select>\n            <mat-option>None</mat-option>\n            <mat-option *ngFor=\"let name of list\" required [value]=\"name\" [(ngModel)]=\"releveIndex.reference\">{{name}}\n            </mat-option>\n          </mat-select>\n          <mat-error>Reference index is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Départ index\" required type=\"number\" name=\"depart\"\n            [(ngModel)]=\"releveIndex.depart\">\n          <mat-error>Départ index is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Arrivé index\" required type=\"number\" name=\"arrive\"\n            [(ngModel)]=\"releveIndex.arrive\">\n          <mat-error>Arrivé index is required.</mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" type=\"submit\"\n            [disabled]=\"angForm.pristine || angForm.invalid\">Ajouter Relevé index</button>\n          <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</form>\n"

/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ReleveIndexAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleveIndexAddComponent", function() { return ReleveIndexAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_ReleveIndex_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/ReleveIndex.model */ "./src/app/shared/models/ReleveIndex.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/releveIndex.service */ "./src/app/shared/services/releveIndex.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/index.service */ "./src/app/shared/services/index.service.ts");







var ReleveIndexAddComponent = /** @class */ (function () {
    function ReleveIndexAddComponent(dialogRef, releveIndexService, indexService, notifService) {
        this.dialogRef = dialogRef;
        this.releveIndexService = releveIndexService;
        this.indexService = indexService;
        this.notifService = notifService;
        this.list = ['13-G', '45-G'];
        this.releveIndex = new src_app_shared_models_ReleveIndex_model__WEBPACK_IMPORTED_MODULE_2__["ReleveIndex"]();
        this.indexService.getIndexList();
        this.getNamesList();
    }
    ReleveIndexAddComponent.prototype.addReleveIndex = function () {
        var _this = this;
        this.releveIndexService.addReleveIndex(this.releveIndex)
            .subscribe(function (res) {
            _this.releveIndexService.getReleveIndexsList();
            _this.dialogRef.close();
            _this.notifService.success('relevé index ajouter avec succés');
        }, function (err) { return console.log(err); });
    };
    ReleveIndexAddComponent.prototype.getNamesList = function () {
        var i;
        for (i = 0; i < this.indexService.indexs.length; i++) {
            this.list.push(this.indexService.indexs[i].reference);
        }
    };
    ReleveIndexAddComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ReleveIndexAddComponent.prototype.onClear = function (form) {
        form.reset();
    };
    ReleveIndexAddComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ReleveIndexAddComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ReleveIndexAddComponent.prototype, "paginator", void 0);
    ReleveIndexAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-releve-index-add',
            template: __webpack_require__(/*! ./releveIndex-add.component.html */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.html"),
            styles: [__webpack_require__(/*! ./releveIndex-add.component.css */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_4__["ReleveIndexService"],
            src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_6__["IndexService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], ReleveIndexAddComponent);
    return ReleveIndexAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9SZWNldHRlL3JlbGV2ZUluZGV4LWxpc3QvcmVsZXZlSW5kZXgtZWRpdC9yZWxldmVJbmRleC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span>Modifier relevé index</span>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n      <mat-icon>clear</mat-icon>\n    </button>\n  </mat-toolbar>\n  <form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\n    <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n      <mat-grid-tile>\n        <div class=\"controles-container\">\n          <input type=\"hidden\" >\n          <mat-form-field>\n              <input matInput placeholder=\"Reference index\" required type=\"text\" name=\"reference\"\n                [(ngModel)]=\"releveIndex.reference\">\n              <mat-error>Reference index is required.</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Départ index\" required type=\"number\" name=\"depart\" [(ngModel)]=\"releveIndex.depart\">\n              <mat-error>Départ index is required.</mat-error>\n            </mat-form-field>\n            <mat-form-field>\n              <input matInput placeholder=\"Arrivé index\" required type=\"number\" name=\"arrive\" [(ngModel)]=\"releveIndex.arrive\">\n              <mat-error>Arrivé index is required.</mat-error>\n            </mat-form-field>\n          <div class=\"button-row\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\"\n              (click)=\"updateReleveIndex()\">Modifier type</button>\n            <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\n          </div>\n        </div>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </form>\n"

/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ReleveIndexEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleveIndexEditComponent", function() { return ReleveIndexEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/releveIndex.service */ "./src/app/shared/services/releveIndex.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var ReleveIndexEditComponent = /** @class */ (function () {
    function ReleveIndexEditComponent(dialogRef, data, releveIndexService, notifservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.releveIndexService = releveIndexService;
        this.notifservice = notifservice;
        this.releveIndex = data.index;
    }
    ReleveIndexEditComponent.prototype.updateReleveIndex = function () {
        var _this = this;
        this.releveIndexService.updateReleveIndex(this.releveIndex._id, this.releveIndex)
            .subscribe(function (res) {
            _this.releveIndexService.getReleveIndexsList();
            _this.dialogRef.close();
            _this.notifservice.success('Relevé index modifié avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    ReleveIndexEditComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ReleveIndexEditComponent.prototype.onClear = function (form) {
        form.reset();
    };
    ReleveIndexEditComponent.prototype.ngOnInit = function () {
    };
    ReleveIndexEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-releve-index-edit',
            template: __webpack_require__(/*! ./releveIndex-edit.component.html */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.html"),
            styles: [__webpack_require__(/*! ./releveIndex-edit.component.css */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_3__["ReleveIndexService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], ReleveIndexEditComponent);
    return ReleveIndexEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-footer-row {\r\n  font-weight: bold;\r\n}\r\n\r\n.detailsButton {\r\n  background: lightgray;\r\n  min-width: 90px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL1JlY2V0dGUvcmVsZXZlSW5kZXgtbGlzdC9yZWxldmVJbmRleC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9SZWNldHRlL3JlbGV2ZUluZGV4LWxpc3QvcmVsZXZlSW5kZXgtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvb3Rlci1yb3cge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGV0YWlsc0J1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gIG1pbi13aWR0aDogOTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\n  <button mat-raised-button (click)=\"addReleveIndexDialog()\">\n    <mat-icon>add</mat-icon>Ajouter\n  </button>\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput placeholder=\"Search\" autocomplete=\"off\" [(ngModel)]=\"search\" (keyup)=\"filter()\">\n    <button *ngIf=\"search\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"releveIndexService.releveIndexsMatTab\" matSort>\n    <ng-container matColumnDef=\"reference\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Reference</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.reference}}</mat-cell>\n      <mat-footer-cell *matFooterCellDef>Recette Carburant</mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"depart\">\n      <mat-header-cell *matHeaderCellDef>Départ</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.depart}}</mat-cell>\n      <mat-footer-cell *matFooterCellDef></mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"arrive\">\n      <mat-header-cell *matHeaderCellDef>Arrivé</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.arrive}}</mat-cell>\n      <mat-footer-cell *matFooterCellDef></mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"quantite\">\n      <mat-header-cell *matHeaderCellDef>Quantité</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.quantite}}</mat-cell>\n      <mat-footer-cell *matFooterCellDef></mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"prix\">\n      <mat-header-cell *matHeaderCellDef>Prix</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.prix}}</mat-cell>\n      <mat-footer-cell *matFooterCellDef></mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"prevue\">\n      <mat-header-cell *matHeaderCellDef>Somme prévue</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.prevue}}</mat-cell>\n      <mat-footer-cell *matFooterCellDef>{{getTotalPrevue()}}</mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"updateReleveIndexDialog(row)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"deleteReleveIndexDialog(row._id, 'relevé index')\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n      </mat-cell>\n      <mat-footer-cell *matFooterCellDef><button mat-raised-button class=\"detailsButton\" (click)=\"addReleveIndexDialog()\">\n        <mat-icon>add</mat-icon>Détails\n      </button></mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data ...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data.\n      </mat-footer-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns\" [ngClass]=\"{'hide':releveIndexService.releveIndexsMatTab!=null && releveIndexService.releveIndexsMatTab.data.length==0}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':releveIndexService.releveIndexsMatTab!=null}\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(releveIndexService.releveIndexsMatTab!=null && releveIndexService.releveIndexsMatTab.data.length==0)}\"></mat-footer-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ReleveIndexListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleveIndexListComponent", function() { return ReleveIndexListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/releveIndex.service */ "./src/app/shared/services/releveIndex.service.ts");
/* harmony import */ var _releveIndex_add_releveIndex_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./releveIndex-add/releveIndex-add.component */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.ts");
/* harmony import */ var src_app_Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Components/Shared/confirm-delete/confirm-delete.component */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _releveIndex_edit_releveIndex_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./releveIndex-edit/releveIndex-edit.component */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.ts");







var ReleveIndexListComponent = /** @class */ (function () {
    function ReleveIndexListComponent(releveIndexService, dialog) {
        this.releveIndexService = releveIndexService;
        this.dialog = dialog;
        this.displayedColumns = ['reference', 'depart', 'arrive', 'quantite', 'prix', 'prevue', 'actions'];
        this.getScreenSize();
    }
    ReleveIndexListComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 650) {
            this.displayedColumns = ['reference', 'quantite', 'prevue', 'actions'];
        }
        else {
            this.displayedColumns = ['reference', 'depart', 'arrive', 'quantite', 'prix', 'prevue', 'actions'];
        }
    };
    ReleveIndexListComponent.prototype.ngOnInit = function () {
        this.releveIndexService.getReleveIndexsList(this.sort, this.paginator);
    };
    ReleveIndexListComponent.prototype.addReleveIndexDialog = function () {
        this.dialog.open(_releveIndex_add_releveIndex_add_component__WEBPACK_IMPORTED_MODULE_4__["ReleveIndexAddComponent"], {
            panelClass: 'full-width-dialog'
        });
    };
    ReleveIndexListComponent.prototype.getTotalPrevue = function () {
        return this.releveIndexService.releveIndexs.map(function (t) { return t.prevue; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    ReleveIndexListComponent.prototype.deleteReleveIndexDialog = function (id, msg) {
        this.dialog.open(src_app_Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], {
            data: { id: id, msg: msg }
        });
    };
    ReleveIndexListComponent.prototype.updateReleveIndexDialog = function (index) {
        this.dialog.open(_releveIndex_edit_releveIndex_edit_component__WEBPACK_IMPORTED_MODULE_6__["ReleveIndexEditComponent"], {
            panelClass: 'full-width-dialog',
            data: { index: Object.assign({}, index) }
        });
    };
    ReleveIndexListComponent.prototype.filter = function () {
        this.releveIndexService.releveIndexsMatTab.filter = this.search.trim().toLowerCase();
    };
    ReleveIndexListComponent.prototype.clearSearch = function () {
        this.search = '';
        this.filter();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ReleveIndexListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReleveIndexListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ReleveIndexListComponent.prototype, "getScreenSize", null);
    ReleveIndexListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-releve-index-list',
            template: __webpack_require__(/*! ./releveIndex-list.component.html */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.html"),
            styles: [__webpack_require__(/*! ./releveIndex-list.component.css */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_releveIndex_service__WEBPACK_IMPORTED_MODULE_3__["ReleveIndexService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ReleveIndexListComponent);
    return ReleveIndexListComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-param\">\n  <mat-toolbar color=\"primary\">\n    <span>Journée et poste</span>\n  </mat-toolbar>\n  <div class=\"mat-elevation-z8 mt-3\">\n    <mat-table [dataSource]=\"sessionService.sessionMatTab\" matSort>\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef>Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.date}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"poste\">\n        <mat-header-cell *matHeaderCellDef>Poste</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.poste}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"description\">\n        <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.description}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"state\">\n        <mat-header-cell *matHeaderCellDef>State</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.state}}</mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"loading\">\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          Loading data ...\n        </mat-footer-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"noData\">\n        <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          No data.\n        </mat-footer-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':sessionService.sessionMatTab!=null}\">\n      </mat-footer-row>\n      <mat-footer-row *matFooterRowDef=\"['noData']\"\n        [ngClass]=\"{'hide':!(sessionService.sessionMatTab!=null && sessionService.sessionMatTab.data.length==0)}\">\n      </mat-footer-row>\n    </mat-table>\n  </div>\n</div>\n<div class=\"margin-param\">\n  <mat-toolbar color=\"primary\">\n    <span>Relevé des indexes poste</span>\n  </mat-toolbar>\n  <app-releve-index-list></app-releve-index-list>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/session.service */ "./src/app/shared/services/session.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(sessionService) {
        this.sessionService = sessionService;
        this.displayedColumns = ['date', 'poste', 'description', 'state'];
        this.getScreenSize();
    }
    HomeComponent.prototype.getScreenSize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        if (this.screenWidth < 650) {
            this.displayedColumns = ['date', 'poste', 'state'];
        }
        else {
            this.displayedColumns = ['date', 'poste', 'description', 'state'];
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.sessionService.getCurrentSession();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], HomeComponent.prototype, "getScreenSize", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9DYXJ0ZSBCb24vY2FyZC10eXBlLWxpc3QvY2FyZC10eXBlLWFkZC9jYXJkLXR5cGUtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Ajouter type carte bon</span>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\"><mat-icon>clear</mat-icon></button>\n</mat-toolbar>\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\" (submit)=\"addCardType()\">\n  <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n    <mat-grid-tile>\n      <div class=\"controles-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Code carte Bon*\" required type=\"text\" name=\"cardCode\" [(ngModel)]=\"cardType.cardCode\">\n          <mat-error>code carte bon is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Description*\" required type=\"text\" name=\"cardDescription\" [(ngModel)]=\"cardType.cardDescription\">\n          <mat-error>description carte bon is required.</mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" >Ajouter type</button>\n          <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</form>"

/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: CardTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTypeAddComponent", function() { return CardTypeAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/carte-bon-type.service */ "./src/app/shared/services/carte-bon-type.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_models_cardType_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/models/cardType.model */ "./src/app/shared/models/cardType.model.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");






var CardTypeAddComponent = /** @class */ (function () {
    function CardTypeAddComponent(dialogRef, cardTypeService, notifService) {
        this.dialogRef = dialogRef;
        this.cardTypeService = cardTypeService;
        this.notifService = notifService;
        this.cardType = new src_app_shared_models_cardType_model__WEBPACK_IMPORTED_MODULE_4__["CardType"]();
    }
    CardTypeAddComponent.prototype.addCardType = function () {
        var _this = this;
        this.cardTypeService.addCardType(this.cardType)
            .subscribe(function (res) {
            _this.cardTypeService.getCardTypesList();
            _this.dialogRef.close();
            _this.notifService.success('Carte Bon Type ajouter avec succés');
        }, function (err) { return console.log(err); });
    };
    CardTypeAddComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    CardTypeAddComponent.prototype.onClear = function (form) {
        form.reset();
    };
    CardTypeAddComponent.prototype.ngOnInit = function () {
    };
    CardTypeAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-type-add',
            template: __webpack_require__(/*! ./card-type-add.component.html */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.html"),
            styles: [__webpack_require__(/*! ./card-type-add.component.css */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_2__["CarteBonTypeService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], CardTypeAddComponent);
    return CardTypeAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9DYXJ0ZSBCb24vY2FyZC10eXBlLWxpc3QvY2FyZC10eXBlLWVkaXQvY2FyZC10eXBlLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Modifier type carte bon</span>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\n  <mat-grid-list cols=\"1\" rowHeight=\"300px\">\n    <mat-grid-tile>\n      <div class=\"controles-container\">\n        <input type=\"hidden\" >\n        <mat-form-field>\n          <input matInput placeholder=\"Code carte Bon\" required type=\"text\" name=\"cardCode\" [(ngModel)]=\"cardType.cardCode\">\n          <mat-error>code carte bon is required.</mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"Description\" required type=\"text\" name=\"cardDescription\" [(ngModel)]=\"cardType.cardDescription\">\n          <mat-error>description carte bon is required.</mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n          <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\"\n            (click)=\"updateCardType()\">Modifier type</button>\n          <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\n        </div>\n      </div>\n    </mat-grid-tile>\n  </mat-grid-list>\n</form>\n"

/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CardTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTypeEditComponent", function() { return CardTypeEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/services/carte-bon-type.service */ "./src/app/shared/services/carte-bon-type.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var CardTypeEditComponent = /** @class */ (function () {
    function CardTypeEditComponent(dialogRef, data, cardTypeService, notifservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.cardTypeService = cardTypeService;
        this.notifservice = notifservice;
        this.cardType = data.cardType;
    }
    CardTypeEditComponent.prototype.updateCardType = function () {
        var _this = this;
        this.cardTypeService.updateCardType(this.cardType._id, this.cardType)
            .subscribe(function (res) {
            _this.cardTypeService.getCardTypesList();
            _this.dialogRef.close();
            _this.notifservice.success('Carte Bon type modifié avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    CardTypeEditComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    CardTypeEditComponent.prototype.onClear = function (form) {
        form.reset();
    };
    CardTypeEditComponent.prototype.ngOnInit = function () {
    };
    CardTypeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-type-edit',
            template: __webpack_require__(/*! ./card-type-edit.component.html */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.html"),
            styles: [__webpack_require__(/*! ./card-type-edit.component.css */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_2__["CarteBonTypeService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], CardTypeEditComponent);
    return CardTypeEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9DYXJ0ZSBCb24vY2FyZC10eXBlLWxpc3QvY2FyZC10eXBlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\n  <button mat-raised-button (click)=\"addCardTypeDialog()\">\n    <mat-icon>add</mat-icon>Ajouter\n  </button>\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput placeholder=\"Search\" autocomplete=\"off\" [(ngModel)]=\"search\" (keyup)=\"filter()\">\n    <button *ngIf=\"search\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"cardTypeService.cardTypesMatTab\" matSort>\n    <ng-container matColumnDef=\"cardCode\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Code</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.cardCode}}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"cardDescription\">\n      <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.cardDescription}}</mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n          <button mat-icon-button (click)=\"updateCardTypeDialog(row)\">\n              <mat-icon>edit</mat-icon>\n          </button>\n          <button mat-icon-button color=\"warn\" (click)=\"deleteCardTypeDialog(row._id, 'type carte bon')\">\n              <mat-icon>delete_outline</mat-icon>\n          </button>\n      </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          Loading data ...\n      </mat-footer-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n          No data.\n      </mat-footer-cell>\n  </ng-container>\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':cardTypeService.cardTypesMatTab!=null}\"></mat-footer-row>\n  <mat-footer-row *matFooterRowDef=\"['noData']\" [ngClass]=\"{'hide':!(cardTypeService.cardTypesMatTab!=null && cardTypeService.cardTypesMatTab.data.length==0)}\">\n  </mat-footer-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CardTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTypeListComponent", function() { return CardTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/carte-bon-type.service */ "./src/app/shared/services/carte-bon-type.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _card_type_add_card_type_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-type-add/card-type-add.component */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.ts");
/* harmony import */ var _Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Shared/confirm-delete/confirm-delete.component */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _card_type_edit_card_type_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card-type-edit/card-type-edit.component */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.ts");







var CardTypeListComponent = /** @class */ (function () {
    function CardTypeListComponent(cardTypeService, dialog) {
        this.cardTypeService = cardTypeService;
        this.dialog = dialog;
        this.displayedColumns = ['cardCode', 'cardDescription', 'actions'];
    }
    CardTypeListComponent.prototype.ngOnInit = function () {
        this.cardTypeService.getCardTypesList(this.sort, this.paginator);
    };
    CardTypeListComponent.prototype.addCardTypeDialog = function () {
        this.dialog.open(_card_type_add_card_type_add_component__WEBPACK_IMPORTED_MODULE_4__["CardTypeAddComponent"], {
            panelClass: 'full-width-dialog'
        });
    };
    CardTypeListComponent.prototype.deleteCardTypeDialog = function (id, msg) {
        this.dialog.open(_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], {
            data: { id: id, msg: msg }
        });
    };
    CardTypeListComponent.prototype.updateCardTypeDialog = function (cardType) {
        this.dialog.open(_card_type_edit_card_type_edit_component__WEBPACK_IMPORTED_MODULE_6__["CardTypeEditComponent"], {
            panelClass: 'full-width-dialog',
            data: { cardType: Object.assign({}, cardType) }
        });
    };
    CardTypeListComponent.prototype.filter = function () {
        this.cardTypeService.cardTypesMatTab.filter = this.search.trim().toLowerCase();
    };
    CardTypeListComponent.prototype.clearSearch = function () {
        this.search = '';
        this.filter();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CardTypeListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CardTypeListComponent.prototype, "paginator", void 0);
    CardTypeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-type-list',
            template: __webpack_require__(/*! ./card-type-list.component.html */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.html"),
            styles: [__webpack_require__(/*! ./card-type-list.component.css */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_2__["CarteBonTypeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], CardTypeListComponent);
    return CardTypeListComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jaXRlcm5lL2NpdGVybmUtbGlzdC9hZGQtY2l0ZXJuZS9hZGQtY2l0ZXJuZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>Ajouter Citerne</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\r\n    <mat-icon>clear</mat-icon>\r\n  </button>\r\n</mat-toolbar>\r\n\r\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\r\n  <div>\r\n    <mat-grid-list [cols]=\"width\" rowHeight=\"100px\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"identifiant\" required type=\"text\" name=\"identifiant\"\r\n            [(ngModel)]=\"citerne.identifiant\">\r\n          <mat-error>L'identifiant du citerne est obligatoire!</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"capacite\" required type=\"number\" name=\"capacite\" [(ngModel)]=\"citerne.capacite\">\r\n          <mat-error>La capacité du citerne est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Selectiooner un type</mat-label>\r\n          <mat-select required [(ngModel)]=\"citerne.type\" name=\"type\">\r\n            <mat-option value=\"essence\">Essence</mat-option>\r\n            <mat-option value=\"diesel\">Diesel</mat-option>\r\n          </mat-select>\r\n\r\n          <mat-error>Type est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n      \r\n    </mat-grid-list>\r\n\r\n    \r\n    <div class=\"button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"addCiterne()\"\r\n        [disabled]=\"angForm.pristine || angForm.invalid\">Ajouter\r\n      </button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Annuler</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: AddCiterneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCiterneComponent", function() { return AddCiterneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_citerne_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/citerne.model */ "./src/app/shared/models/citerne.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var src_app_shared_services_citerne_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/citerne.service */ "./src/app/shared/services/citerne.service.ts");






var AddCiterneComponent = /** @class */ (function () {
    function AddCiterneComponent(dialogMat, citerneService, notifService) {
        this.dialogMat = dialogMat;
        this.citerneService = citerneService;
        this.notifService = notifService;
        this.citerne = new src_app_shared_models_citerne_model__WEBPACK_IMPORTED_MODULE_2__["Citerne"]();
        this.width = 2;
    }
    AddCiterneComponent.prototype.ngOnInit = function () {
        if (document.body.clientWidth < 600) {
            this.width = 1;
        }
    };
    AddCiterneComponent.prototype.onClose = function () {
        this.dialogMat.close();
    };
    AddCiterneComponent.prototype.onClear = function (form) {
        form.reset();
    };
    AddCiterneComponent.prototype.addCiterne = function () {
        var _this = this;
        this.citerne.contenu = 0;
        console.log(this.citerne);
        this.citerneService.addCiterne(this.citerne).subscribe(function (res) {
            _this.citerneService.getCiternesList();
            _this.dialogMat.close();
            _this.notifService.success('Citerne ajouter avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    AddCiterneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-citerne',
            template: __webpack_require__(/*! ./add-citerne.component.html */ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.html"),
            styles: [__webpack_require__(/*! ./add-citerne.component.css */ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_citerne_service__WEBPACK_IMPORTED_MODULE_5__["CiterneService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], AddCiterneComponent);
    return AddCiterneComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jaXRlcm5lL2NpdGVybmUtbGlzdC9jaXRlcm5lLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\r\n  <button mat-raised-button (click)=\"addCiterneDialog()\">\r\n    <mat-icon>add</mat-icon>Ajouter\r\n  </button>\r\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\r\n    <input matInput placeholder=\"Search\" autocomplete=\"off\" [(ngModel)]=\"search\" (keyup)=\"filter()\">\r\n    <button *ngIf=\"search\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n</div>\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table [dataSource]=\"citerneService.citernesMatTab\" matSort>\r\n    <ng-container matColumnDef=\"identifiant\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Identifiant</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.identifiant}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"capacite\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Capacite</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.capacite}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Type</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.type}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"contenu\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Volume Restant</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.contenu}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <button class=\"position\" mat-icon-button matTooltip=\"Editer\" color=\"primary\" (click)=\"updateCiterneDialog(row)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button class=\"position\" mat-icon-button matTooltip=\"Supprimer\" color=\"warn\"\r\n          (click)=\"deleteCiterneDialog(row._id, 'citerne')\">\r\n          <mat-icon>delete_outline</mat-icon>\r\n      </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"loading\">\r\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n        Loading data ...\r\n      </mat-footer-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"noData\">\r\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n        No data.\r\n      </mat-footer-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':citerneService.citernesMatTab!=null}\">\r\n    </mat-footer-row>\r\n    <mat-footer-row *matFooterRowDef=\"['noData']\"\r\n      [ngClass]=\"{'hide':!(citerneService.citernesMatTab!=null && citerneService.citernesMatTab.data.length==0)}\">\r\n    </mat-footer-row>\r\n  </mat-table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CiterneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiterneListComponent", function() { return CiterneListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_citerne_add_citerne_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-citerne/add-citerne.component */ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.ts");
/* harmony import */ var _Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/confirm-delete/confirm-delete.component */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _update_citerne_update_citerne_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update-citerne/update-citerne.component */ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.ts");
/* harmony import */ var src_app_shared_services_citerne_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/citerne.service */ "./src/app/shared/services/citerne.service.ts");







var CiterneListComponent = /** @class */ (function () {
    function CiterneListComponent(citerneService, dialog) {
        this.citerneService = citerneService;
        this.dialog = dialog;
        this.displayedColumns = ['identifiant', 'capacite', 'type', 'contenu'];
    }
    CiterneListComponent.prototype.ngOnInit = function () {
        this.citerneService.getCiternesList(this.sort, this.paginator);
    };
    CiterneListComponent.prototype.addCiterneDialog = function () {
        this.dialog.open(_add_citerne_add_citerne_component__WEBPACK_IMPORTED_MODULE_3__["AddCiterneComponent"], {
            panelClass: 'full-width-dialog'
        });
    };
    CiterneListComponent.prototype.deleteCiterneDialog = function (id, msg) {
        this.dialog.open(_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDeleteComponent"], {
            data: { id: id, msg: msg }
        });
    };
    CiterneListComponent.prototype.updateCiterneDialog = function (citerne) {
        this.dialog.open(_update_citerne_update_citerne_component__WEBPACK_IMPORTED_MODULE_5__["UpdateCiterneComponent"], {
            panelClass: 'full-width-dialog',
            data: { citerne: Object.assign({}, citerne) }
        });
    };
    CiterneListComponent.prototype.filter = function () {
        this.citerneService.citernesMatTab.filter = this.search.trim().toLowerCase();
    };
    CiterneListComponent.prototype.clearSearch = function () {
        this.search = '';
        this.filter();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CiterneListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CiterneListComponent.prototype, "paginator", void 0);
    CiterneListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-citerne-list',
            template: __webpack_require__(/*! ./citerne-list.component.html */ "./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.html"),
            styles: [__webpack_require__(/*! ./citerne-list.component.css */ "./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_citerne_service__WEBPACK_IMPORTED_MODULE_6__["CiterneService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CiterneListComponent);
    return CiterneListComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jaXRlcm5lL2NpdGVybmUtbGlzdC91cGRhdGUtY2l0ZXJuZS91cGRhdGUtY2l0ZXJuZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>Modifier Citerne</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\r\n    <mat-icon>clear</mat-icon>\r\n  </button>\r\n</mat-toolbar>\r\n\r\n\r\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\r\n  <div>\r\n    <mat-grid-list [cols]=\"width\" rowHeight=\"100px\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"identifiant\" required type=\"text\" name=\"identifiant\"\r\n            [(ngModel)]=\"citerne.identifiant\">\r\n          <mat-error>L'identifiant est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Capacite\" required type=\"number\" name=\"capacite\" [(ngModel)]=\"citerne.capacite\">\r\n          <mat-error>La capacite est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Volume Restant\" required type=\"number\" name=\"contenu\" [(ngModel)]=\"citerne.contenu\">\r\n          <mat-error>Le volume restant est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Selectionner le type</mat-label>\r\n          <mat-select required [(ngModel)]=\"citerne.type\" name=\"type\">\r\n            <mat-option value=\"essence\">Essence</mat-option>\r\n            <mat-option value=\"diesel\">Diesel</mat-option>\r\n          </mat-select>\r\n\r\n          <mat-error>Type est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"updateClient()\"\r\n        [disabled]=\"angForm.pristine || angForm.invalid\">Modifier\r\n      </button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Annuler</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UpdateCiterneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCiterneComponent", function() { return UpdateCiterneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_citerne_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/citerne.service */ "./src/app/shared/services/citerne.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var UpdateCiterneComponent = /** @class */ (function () {
    function UpdateCiterneComponent(dialogRef, data, citerneService, notifservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.citerneService = citerneService;
        this.notifservice = notifservice;
        this.citerne = data.citerne;
        this.width = 2;
    }
    UpdateCiterneComponent.prototype.ngOnInit = function () {
        if (document.body.clientWidth < 600) {
            this.width = 1;
        }
    };
    UpdateCiterneComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateCiterneComponent.prototype.onClear = function (form) {
        form.reset();
    };
    UpdateCiterneComponent.prototype.updateClient = function () {
        var _this = this;
        this.citerneService.updateCiterne(this.citerne._id, this.citerne).subscribe(function (res) {
            _this.citerneService.getCiternesList();
            _this.dialogRef.close();
            _this.notifservice.success('Citerne modifié avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    UpdateCiterneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-citerne',
            template: __webpack_require__(/*! ./update-citerne.component.html */ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.html"),
            styles: [__webpack_require__(/*! ./update-citerne.component.css */ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_citerne_service__WEBPACK_IMPORTED_MODULE_3__["CiterneService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], UpdateCiterneComponent);
    return UpdateCiterneComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/add-client/add-client.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jbGllbnQvY2xpZW50LWxpc3QvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/add-client/add-client.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>Ajouter Client</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\r\n    <mat-icon>clear</mat-icon>\r\n  </button>\r\n</mat-toolbar>\r\n\r\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\r\n  <div>\r\n    <mat-grid-list [cols]=\"width\" rowHeight=\"100px\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Matricule Fiscale\" required type=\"text\" name=\"matFisc\"\r\n            [(ngModel)]=\"client.matFisc\">\r\n          <mat-error>Matricule Fiscale est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Nom\" required type=\"text\" name=\"name\" [(ngModel)]=\"client.name\">\r\n          <mat-error>Nom est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Email\" required email type=\"email\" name=\"email\" [(ngModel)]=\"client.email\"\r\n            #email=\"ngModel\">\r\n          <mat-error *ngIf=\"email.errors?.required\">Email est obligatoire</mat-error>\r\n          <mat-error *ngIf=\"email.errors?.email\">Email Invalide</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Type\" required type=\"text\" name=\"type\" [(ngModel)]=\"client.type\">\r\n          <mat-error>Type est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Select an option</mat-label>\r\n          <mat-select required [(ngModel)]=\"client.state\" name=\"state\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option value=\"actif\">Actif</mat-option>\r\n            <mat-option value=\"non actif\">Non Actif</mat-option>\r\n          </mat-select>\r\n\r\n          <mat-error>Etat est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Téléphone\" required type=\"number\" maxlength=\"8\" name=\"phone\"\r\n            [(ngModel)]=\"client.phone\">\r\n          <mat-error>Téléphone est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Fax\" required type=\"number\" maxlength=\"8\" name=\"fax\" [(ngModel)]=\"client.fax\">\r\n          <mat-error>Fax est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Plafond Crédit\" required type=\"number\" min=\"0\" name=\"plafondCredit\"\r\n            [(ngModel)]=\"client.plafondCredit\">\r\n          <mat-error>Plafond Crédit est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Ville\" required type=\"text\" name=\"city\" [(ngModel)]=\"client.address.city\">\r\n          <mat-error>Ville est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Code Postal\" required type=\"number\" min=\"0\" maxlength=\"5\" name=\"postal\"\r\n            [(ngModel)]=\"client.address.postal\">\r\n          <mat-error>Code Postal est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n    <mat-grid-list cols=\"1\" rowHeight=\"100px\">\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Region\" required type=\"text\" name=\"region\" [(ngModel)]=\"client.region\">\r\n          <mat-error>Region est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n\r\n\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"addClient()\"\r\n        [disabled]=\"angForm.pristine || angForm.invalid\">Ajouter\r\n      </button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/add-client/add-client.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_client_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/client.model */ "./src/app/shared/models/client.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/client.service */ "./src/app/shared/services/client.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");






var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(dialogMat, clientService, notifService) {
        this.dialogMat = dialogMat;
        this.clientService = clientService;
        this.notifService = notifService;
        this.client = new src_app_shared_models_client_model__WEBPACK_IMPORTED_MODULE_2__["Client"]();
        this.width = 2;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        if (document.body.clientWidth < 600) {
            this.width = 1;
        }
    };
    AddClientComponent.prototype.onClose = function () {
        this.dialogMat.close();
    };
    AddClientComponent.prototype.onClear = function (form) {
        form.reset();
    };
    AddClientComponent.prototype.addClient = function () {
        var _this = this;
        this.clientService.addClient(this.client).subscribe(function (res) {
            _this.clientService.getClientsList();
            _this.dialogMat.close();
            _this.notifService.success('Client ajouter avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_4__["ClientService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/client-list.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/client-list.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media(max-width: 400px){\r\n    .position {\r\n      margin: 0;\r\n      padding: 0;\r\n      width: 30px;\r\n      height: 30px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wYXJhbWV0ZXJzL2NsaWVudC9jbGllbnQtbGlzdC9jbGllbnQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7TUFDRSxTQUFTO01BQ1QsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jbGllbnQvY2xpZW50LWxpc3QvY2xpZW50LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYShtYXgtd2lkdGg6IDQwMHB4KXtcclxuICAgIC5wb3NpdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/client-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/client-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-card-type-add></app-card-type-add>-->\r\n<div class=\"search-div\">\r\n  <button mat-raised-button (click)=\"addClientDialog()\">\r\n    <mat-icon>add</mat-icon>Ajouter\r\n  </button>\r\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\r\n    <input matInput placeholder=\"Search\" autocomplete=\"off\" [(ngModel)]=\"search\" (keyup)=\"filter()\">\r\n    <button *ngIf=\"search\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-form-field>\r\n</div>\r\n<div class=\"mat-elevation-z8\">\r\n  <mat-table [dataSource]=\"clientService.clientsMatTab\" matSort>\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Nom</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.name}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"matFisc\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Matricule Fiscale</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.matFisc}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"state\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Etat</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">{{element.state}}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\">\r\n        <button class=\"position\" mat-icon-button matTooltip=\"Voir plus\" (click)=\"seeMoreDialog(row)\">\r\n          <mat-icon>remove_red_eye</mat-icon>\r\n        </button>\r\n        <button class=\"position\" mat-icon-button matTooltip=\"Editer\" color=\"primary\" (click)=\"updateClientDialog(row)\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <button class=\"position\" mat-icon-button matTooltip=\"Supprimer\" color=\"warn\"\r\n          (click)=\"deleteClientDialog(row._id, 'client')\">\r\n          <mat-icon>delete_outline</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"loading\">\r\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n        Loading data ...\r\n      </mat-footer-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"noData\">\r\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n        No data.\r\n      </mat-footer-cell>\r\n    </ng-container>\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':clientService.clientsMatTab!=null}\">\r\n    </mat-footer-row>\r\n    <mat-footer-row *matFooterRowDef=\"['noData']\"\r\n      [ngClass]=\"{'hide':!(clientService.clientsMatTab!=null && clientService.clientsMatTab.data.length==0)}\">\r\n    </mat-footer-row>\r\n  </mat-table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/client-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/client-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/client.service */ "./src/app/shared/services/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-details/more-details.component */ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.ts");
/* harmony import */ var _add_client_add_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-client/add-client.component */ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.ts");
/* harmony import */ var _Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Shared/confirm-delete/confirm-delete.component */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _update_client_update_client_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-client/update-client.component */ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.ts");








var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService, dialog) {
        this.clientService = clientService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'matFisc', 'state', 'actions'];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.clientService.getClientsList(this.sort, this.paginator);
    };
    ClientListComponent.prototype.seeMoreDialog = function (client) {
        this.dialog.open(_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_4__["MoreDetailsComponent"], {
            panelClass: 'full-width-dialog',
            height: '500px',
            data: { client: client }
        });
    };
    ClientListComponent.prototype.addClientDialog = function () {
        this.dialog.open(_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_5__["AddClientComponent"], {
            panelClass: 'full-width-dialog'
        });
    };
    ClientListComponent.prototype.deleteClientDialog = function (id, msg) {
        this.dialog.open(_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDeleteComponent"], {
            data: { id: id, msg: msg }
        });
    };
    ClientListComponent.prototype.updateClientDialog = function (client) {
        this.dialog.open(_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_7__["UpdateClientComponent"], {
            panelClass: 'full-width-dialog',
            data: { client: Object.assign({}, client) }
        });
    };
    ClientListComponent.prototype.filter = function () {
        this.clientService.clientsMatTab.filter = this.search.trim().toLowerCase();
    };
    ClientListComponent.prototype.clearSearch = function () {
        this.search = '';
        this.filter();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], ClientListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ClientListComponent.prototype, "paginator", void 0);
    ClientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! ./client-list.component.html */ "./src/app/Components/parameters/client/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.css */ "./src/app/Components/parameters/client/client-list/client-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/more-details/more-details.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jbGllbnQvY2xpZW50LWxpc3QvbW9yZS1kZXRhaWxzL21vcmUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/more-details/more-details.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n    <mat-list>\r\n        <mat-list-item><h4>Email : </h4>&nbsp;&nbsp;{{client.email}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Type : </h4>&nbsp;&nbsp;{{client.type}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Ville : </h4>&nbsp;&nbsp;{{client.address.city}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Region : </h4>&nbsp;&nbsp;{{client.region}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Code Postal : </h4>&nbsp;&nbsp;{{client.address.postal}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Téléphone : </h4>&nbsp;&nbsp;{{client.phone}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Fax : </h4>&nbsp;&nbsp;{{client.fax}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <mat-list-item><h4>Plafond Crédit : </h4>&nbsp;&nbsp;{{client.plafondCredit}}</mat-list-item>\r\n        <mat-divider></mat-divider>\r\n    </mat-list>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-raised-button (click)=\"onNoClick()\" color=\"primary\">Fermer</button>\r\n</div>"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/more-details/more-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MoreDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreDetailsComponent", function() { return MoreDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MoreDetailsComponent = /** @class */ (function () {
    function MoreDetailsComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.client = data.client;
    }
    MoreDetailsComponent.prototype.ngOnInit = function () {
    };
    MoreDetailsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    MoreDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-details',
            template: __webpack_require__(/*! ./more-details.component.html */ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.html"),
            styles: [__webpack_require__(/*! ./more-details.component.css */ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MoreDetailsComponent);
    return MoreDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/update-client/update-client.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9jbGllbnQvY2xpZW50LWxpc3QvdXBkYXRlLWNsaWVudC91cGRhdGUtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/update-client/update-client.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <span>Modifier Client</span>\r\n  <span class=\"fill-remaining-space\"></span>\r\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\r\n    <mat-icon>clear</mat-icon>\r\n  </button>\r\n</mat-toolbar>\r\n\r\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\r\n  <div>\r\n    <mat-grid-list [cols]=\"width\" rowHeight=\"100px\">\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Matricule Fiscale\" required type=\"text\" name=\"matFisc\"\r\n            [(ngModel)]=\"client.matFisc\">\r\n          <mat-error>Matricule Fiscale est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Nom\" required type=\"text\" name=\"name\" [(ngModel)]=\"client.name\">\r\n          <mat-error>Nom est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Email\" required email type=\"email\" name=\"email\" [(ngModel)]=\"client.email\"\r\n            #email=\"ngModel\">\r\n          <mat-error *ngIf=\"email.errors?.required\">Email est obligatoire</mat-error>\r\n          <mat-error *ngIf=\"email.errors?.email\">Email Invalide</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Type\" required type=\"text\" name=\"type\" [(ngModel)]=\"client.type\">\r\n          <mat-error>Type est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <mat-label>Select an option</mat-label>\r\n          <mat-select required [(ngModel)]=\"client.state\" name=\"state\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option value=\"actif\">Actif</mat-option>\r\n            <mat-option value=\"non actif\">Non Actif</mat-option>\r\n          </mat-select>\r\n\r\n          <mat-error>Etat est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Téléphone\" required type=\"number\" maxlength=\"8\" name=\"phone\"\r\n            [(ngModel)]=\"client.phone\">\r\n          <mat-error>Téléphone est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Fax\" required type=\"number\" maxlength=\"8\" name=\"fax\" [(ngModel)]=\"client.fax\">\r\n          <mat-error>Fax est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Plafond Crédit\" required type=\"number\" min=\"0\" name=\"plafondCredit\"\r\n            [(ngModel)]=\"client.plafondCredit\">\r\n          <mat-error>Plafond Crédit est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Ville\" required type=\"text\" name=\"city\" [(ngModel)]=\"client.address.city\">\r\n          <mat-error>Ville est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Code Postal\" required type=\"number\" min=\"0\" maxlength=\"5\" name=\"postal\"\r\n            [(ngModel)]=\"client.address.postal\">\r\n          <mat-error>Code Postal est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n\r\n    <mat-grid-list cols=\"1\" rowHeight=\"100px\">\r\n      <mat-grid-tile>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Region\" required type=\"text\" name=\"region\" [(ngModel)]=\"client.region\">\r\n          <mat-error>Region est obligatoire</mat-error>\r\n        </mat-form-field>\r\n      </mat-grid-tile>\r\n    </mat-grid-list>\r\n\r\n\r\n\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"updateClient()\"\r\n        [disabled]=\"angForm.pristine || angForm.invalid\">Modifier\r\n      </button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/Components/parameters/client/client-list/update-client/update-client.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: UpdateClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateClientComponent", function() { return UpdateClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/client.service */ "./src/app/shared/services/client.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var UpdateClientComponent = /** @class */ (function () {
    function UpdateClientComponent(dialogRef, data, clientService, notifservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.clientService = clientService;
        this.notifservice = notifservice;
        this.client = data.client;
        this.width = 2;
    }
    UpdateClientComponent.prototype.ngOnInit = function () {
        if (document.body.clientWidth < 600) {
            this.width = 1;
        }
    };
    UpdateClientComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    UpdateClientComponent.prototype.onClear = function (form) {
        form.reset();
    };
    UpdateClientComponent.prototype.updateClient = function () {
        var _this = this;
        this.clientService.updateClient(this.client._id, this.client).subscribe(function (res) {
            _this.clientService.getClientsList();
            _this.dialogRef.close();
            _this.notifservice.success('Client modifié avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    UpdateClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-client',
            template: __webpack_require__(/*! ./update-client.component.html */ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.html"),
            styles: [__webpack_require__(/*! ./update-client.component.css */ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], UpdateClientComponent);
    return UpdateClientComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-add/index-add.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9pbmRleC9pbmRleC1saXN0L2luZGV4LWFkZC9pbmRleC1hZGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-add/index-add.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Ajouter Index</span>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\n  <div>\n    <mat-grid-list [cols]=\"width\" rowHeight=\"100px\">\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Reference\" required type=\"text\" name=\"reference\" [(ngModel)]=\"index.reference\">\n          <mat-error>Reference is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Valeur Index\" required type=\"number\" name=\"valeurIndex\"\n            [(ngModel)]=\"index.valeurIndex\">\n          <mat-error>Valeur Index is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Type carburant\" required type=\"text\" name=\"carburant\"\n            [(ngModel)]=\"index.carburant\">\n          <mat-error>Type carburant is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Citerne\" required type=\"text\" name=\"citerne\" [(ngModel)]=\"index.citerne\">\n          <mat-error>Citerne is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Distributeur\" required type=\"text\" name=\"distributeur\"\n            [(ngModel)]=\"index.distributeur\">\n          <mat-error>Distributeur is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n    </mat-grid-list>\n\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" (click)=\"addIndex()\"\n        [disabled]=\"angForm.pristine || angForm.invalid\">Ajouter\n      </button>\n      <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-add/index-add.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: IndexAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexAddComponent", function() { return IndexAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_Index_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/Index.model */ "./src/app/shared/models/Index.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/index.service */ "./src/app/shared/services/index.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");






var IndexAddComponent = /** @class */ (function () {
    function IndexAddComponent(dialogRef, indexService, notifService) {
        this.dialogRef = dialogRef;
        this.indexService = indexService;
        this.notifService = notifService;
        this.index = new src_app_shared_models_Index_model__WEBPACK_IMPORTED_MODULE_2__["Index"]();
        this.width = 2;
    }
    IndexAddComponent.prototype.addIndex = function () {
        var _this = this;
        var datetime = new Date();
        var date = datetime.toISOString().slice(0, 10);
        this.index.dernierDate = date;
        this.indexService.addIndex(this.index)
            .subscribe(function (res) {
            _this.indexService.getIndexList();
            _this.dialogRef.close();
            _this.notifService.success('Index ajouter avec succés');
        }, function (err) { return console.log(err); });
    };
    IndexAddComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    IndexAddComponent.prototype.onClear = function (form) {
        form.reset();
    };
    IndexAddComponent.prototype.ngOnInit = function () {
    };
    IndexAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-add',
            template: __webpack_require__(/*! ./index-add.component.html */ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.html"),
            styles: [__webpack_require__(/*! ./index-add.component.css */ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_4__["IndexService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]])
    ], IndexAddComponent);
    return IndexAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9pbmRleC9pbmRleC1saXN0L2luZGV4LWVkaXQvaW5kZXgtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Modifier Index</span>\n  <span class=\"fill-remaining-space\"></span>\n  <button class=\"btn-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\">\n    <mat-icon>clear</mat-icon>\n  </button>\n</mat-toolbar>\n\n<form mat-dialog-content class=\"normal-form\" #angForm=\"ngForm\">\n  <div>\n    <mat-grid-list [cols]=\"width\" rowHeight=\"100px\">\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Reference\" required type=\"text\" name=\"reference\" [(ngModel)]=\"index.reference\">\n          <mat-error>Reference is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Valeur Index\" required type=\"number\" name=\"valeurIndex\"\n            [(ngModel)]=\"index.valeurIndex\">\n          <mat-error>Valeur Index is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Type carburant\" required type=\"text\" name=\"carburant\"\n            [(ngModel)]=\"index.carburant\">\n          <mat-error>Type carburant is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Citerne\" required type=\"text\" name=\"citerne\" [(ngModel)]=\"index.citerne\">\n          <mat-error>Citerne is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n      <mat-grid-tile>\n        <mat-form-field>\n          <input matInput placeholder=\"Distributeur\" required type=\"text\" name=\"distributeur\"\n            [(ngModel)]=\"index.distributeur\">\n          <mat-error>Distributeur is required.</mat-error>\n        </mat-form-field>\n      </mat-grid-tile>\n\n    </mat-grid-list>\n\n    <div class=\"button-row\">\n      <button mat-raised-button color=\"primary\" (click)=\"updateIndex()\"\n        [disabled]=\"angForm.pristine || angForm.invalid\">Modifier\n      </button>\n      <button mat-raised-button color=\"warn\" (click)=\"onClear(angForm)\">Reset</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: IndexEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexEditComponent", function() { return IndexEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/index.service */ "./src/app/shared/services/index.service.ts");
/* harmony import */ var src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");





var IndexEditComponent = /** @class */ (function () {
    function IndexEditComponent(dialogRef, data, indexService, notifservice) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.indexService = indexService;
        this.notifservice = notifservice;
        this.index = data.index;
        this.width = 2;
    }
    IndexEditComponent.prototype.updateIndex = function () {
        var _this = this;
        this.indexService.updateIndex(this.index._id, this.index)
            .subscribe(function (res) {
            _this.indexService.getIndexList();
            _this.dialogRef.close();
            _this.notifservice.success('Index modifié avec succés');
        }, function (err) {
            console.log(err);
        });
    };
    IndexEditComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    IndexEditComponent.prototype.onClear = function (form) {
        form.reset();
    };
    IndexEditComponent.prototype.ngOnInit = function () {
    };
    IndexEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-edit',
            template: __webpack_require__(/*! ./index-edit.component.html */ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.html"),
            styles: [__webpack_require__(/*! ./index-edit.component.css */ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"],
            src_app_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
    ], IndexEditComponent);
    return IndexEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-list.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-list.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9pbmRleC9pbmRleC1saXN0L2luZGV4LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-list.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-div\">\n  <button mat-raised-button (click)=\"addIndexDialog()\">\n    <mat-icon>add</mat-icon>Ajouter\n  </button>\n  <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n    <input matInput placeholder=\"Search\" autocomplete=\"off\" [(ngModel)]=\"search\" (keyup)=\"filter()\">\n    <button *ngIf=\"search\" mat-button matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </mat-form-field>\n</div>\n<div class=\"mat-elevation-z8\">\n  <mat-table [dataSource]=\"indexService.indexsMatTab\" matSort>\n    <ng-container matColumnDef=\"reference\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header>Reference</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.reference}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"valeurIndex\">\n      <mat-header-cell *matHeaderCellDef>Valeur index</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.valeurIndex}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"dernierDate\">\n      <mat-header-cell *matHeaderCellDef>Dernier date</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.dernierDate}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"carburant\">\n      <mat-header-cell *matHeaderCellDef>Carburant</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.carburant}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"citerne\">\n      <mat-header-cell *matHeaderCellDef>Citerne</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.citerne}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"distributeur\">\n      <mat-header-cell *matHeaderCellDef>Distributeur</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">{{element.distributeur}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"actions\">\n      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <button mat-icon-button (click)=\"updateIndexDialog(row)\">\n          <mat-icon>edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"deleteIndexDialog(row._id, 'index')\">\n          <mat-icon>delete_outline</mat-icon>\n        </button>\n      </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"loading\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        Loading data ...\n      </mat-footer-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"noData\">\n      <mat-footer-cell *matFooterCellDef colspan=\"6\">\n        No data.\n      </mat-footer-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':indexService.indexsMatTab!=null}\">\n    </mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"['noData']\"\n      [ngClass]=\"{'hide':!(indexService.indexsMatTab!=null && indexService.indexsMatTab.data.length==0)}\">\n    </mat-footer-row>\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"5\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/parameters/index/index-list/index-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Components/parameters/index/index-list/index-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: IndexListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexListComponent", function() { return IndexListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/index.service */ "./src/app/shared/services/index.service.ts");
/* harmony import */ var _index_add_index_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-add/index-add.component */ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.ts");
/* harmony import */ var src_app_Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Components/Shared/confirm-delete/confirm-delete.component */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _index_edit_index_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-edit/index-edit.component */ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.ts");







var IndexListComponent = /** @class */ (function () {
    function IndexListComponent(indexService, dialog) {
        this.indexService = indexService;
        this.dialog = dialog;
        this.displayedColumns = ['reference', 'valeurIndex', 'dernierDate', 'carburant', 'citerne', 'distributeur', 'actions'];
    }
    IndexListComponent.prototype.ngOnInit = function () {
        this.indexService.getIndexList(this.sort, this.paginator);
    };
    IndexListComponent.prototype.addIndexDialog = function () {
        this.dialog.open(_index_add_index_add_component__WEBPACK_IMPORTED_MODULE_4__["IndexAddComponent"], {
            panelClass: 'full-width-dialog'
        });
    };
    IndexListComponent.prototype.deleteIndexDialog = function (id, msg) {
        this.dialog.open(src_app_Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], {
            data: { id: id, msg: msg }
        });
    };
    IndexListComponent.prototype.updateIndexDialog = function (index) {
        this.dialog.open(_index_edit_index_edit_component__WEBPACK_IMPORTED_MODULE_6__["IndexEditComponent"], {
            panelClass: 'full-width-dialog',
            data: { index: Object.assign({}, index) }
        });
    };
    IndexListComponent.prototype.filter = function () {
        this.indexService.indexsMatTab.filter = this.search.trim().toLowerCase();
    };
    IndexListComponent.prototype.clearSearch = function () {
        this.search = '';
        this.filter();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], IndexListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IndexListComponent.prototype, "paginator", void 0);
    IndexListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-list',
            template: __webpack_require__(/*! ./index-list.component.html */ "./src/app/Components/parameters/index/index-list/index-list.component.html"),
            styles: [__webpack_require__(/*! ./index-list.component.css */ "./src/app/Components/parameters/index/index-list/index-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], IndexListComponent);
    return IndexListComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/parameters.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/parameters/parameters.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYW1ldGVycy9wYXJhbWV0ZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/parameters/parameters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/parameters/parameters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-param\">\r\n    <mat-toolbar color=\"primary\">\r\n        <span>Carte Bon Types</span>\r\n    </mat-toolbar>\r\n    <app-card-type-list></app-card-type-list>\r\n</div>\r\n<div class=\"margin-param\">\r\n    <mat-toolbar color=\"primary\">\r\n        <span>Clients</span>\r\n    </mat-toolbar>\r\n    <app-client-list></app-client-list>\r\n</div>\r\n<div class=\"margin-param\">\r\n    <mat-toolbar color=\"primary\">\r\n        <span>Citernes</span>\r\n    </mat-toolbar>\r\n    <app-citerne-list></app-citerne-list>\r\n</div>\r\n<div class=\"margin-param\">\r\n  <mat-toolbar color=\"primary\">\r\n      <span>Indexs</span>\r\n  </mat-toolbar>\r\n  <app-index-list></app-index-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Components/parameters/parameters.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/parameters/parameters.component.ts ***!
  \***************************************************************/
/*! exports provided: ParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersComponent", function() { return ParametersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ParametersComponent = /** @class */ (function () {
    function ParametersComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.cardType = { cardCode: '', cardDescription: '' };
        this.createForm();
    }
    ParametersComponent.prototype.createForm = function () {
        this.angForm = this.formBuilder.group({
            cardCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cardDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ParametersComponent.prototype.ngOnInit = function () {
    };
    ParametersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parameters',
            template: __webpack_require__(/*! ./parameters.component.html */ "./src/app/Components/parameters/parameters.component.html"),
            styles: [__webpack_require__(/*! ./parameters.component.css */ "./src/app/Components/parameters/parameters.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ParametersComponent);
    return ParametersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/parameters/parameters.component */ "./src/app/Components/parameters/parameters.component.ts");
/* harmony import */ var _Components_Authentification_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Authentification/register/register.component */ "./src/app/Components/Authentification/register/register.component.ts");
/* harmony import */ var _Components_Authentification_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Authentification/login/login.component */ "./src/app/Components/Authentification/login/login.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _shared_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/Guards/auth.guard */ "./src/app/shared/Guards/auth.guard.ts");








var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _Components_Authentification_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'register',
        component: _Components_Authentification_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'parameters',
        component: _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ParametersComponent"],
        canActivate: [_shared_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'home',
        component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        canActivate: [_shared_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar color=\"blue\"></ng2-slim-loading-bar>\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">SS</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" routerLink=\"/parameters\" routerLinkActive=\"active\">Parameters</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav\">\n        <a class=\"nav-link\" *ngIf=\"!authService.loggedIn()\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n        <a class=\"nav-link\" *ngIf=\"!authService.loggedIn()\" routerLink=\"/register\" routerLinkActive=\"active\">Register</a>\n        <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" (click)=\"authService.logoutUser()\" >Logout</a>\n    </ul>\n  </div>\n</nav>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, _loadingBar, _router) {
        var _this = this;
        this.authService = authService;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'App';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_3__["SlimLoadingBarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_Authentification_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Authentification/login/login.component */ "./src/app/Components/Authentification/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Components_Authentification_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Authentification/register/register.component */ "./src/app/Components/Authentification/register/register.component.ts");
/* harmony import */ var _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/parameters/parameters.component */ "./src/app/Components/parameters/parameters.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _shared_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/Guards/auth.guard */ "./src/app/shared/Guards/auth.guard.ts");
/* harmony import */ var _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/services/token-interceptor.service */ "./src/app/shared/services/token-interceptor.service.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/carte-bon-type.service */ "./src/app/shared/services/carte-bon-type.service.ts");
/* harmony import */ var _Components_parameters_Carte_Bon_card_type_list_card_type_add_card_type_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-add/card-type-add.component.ts");
/* harmony import */ var _Components_parameters_Carte_Bon_card_type_list_card_type_edit_card_type_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-edit/card-type-edit.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _Components_parameters_client_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/parameters/client/client-list/client-list.component */ "./src/app/Components/parameters/client/client-list/client-list.component.ts");
/* harmony import */ var _Components_parameters_client_client_list_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/parameters/client/client-list/more-details/more-details.component */ "./src/app/Components/parameters/client/client-list/more-details/more-details.component.ts");
/* harmony import */ var _Components_parameters_client_client_list_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/parameters/client/client-list/add-client/add-client.component */ "./src/app/Components/parameters/client/client-list/add-client/add-client.component.ts");
/* harmony import */ var _Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/Shared/confirm-delete/confirm-delete.component */ "./src/app/Components/Shared/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _Components_parameters_client_client_list_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/parameters/client/client-list/update-client/update-client.component */ "./src/app/Components/parameters/client/client-list/update-client/update-client.component.ts");
/* harmony import */ var _Components_parameters_Carte_Bon_card_type_list_card_type_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/parameters/Carte Bon/card-type-list/card-type-list.component */ "./src/app/Components/parameters/Carte Bon/card-type-list/card-type-list.component.ts");
/* harmony import */ var _Components_parameters_citerne_citerne_list_add_citerne_add_citerne_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component */ "./src/app/Components/parameters/citerne/citerne-list/add-citerne/add-citerne.component.ts");
/* harmony import */ var _Components_parameters_citerne_citerne_list_citerne_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Components/parameters/citerne/citerne-list/citerne-list.component */ "./src/app/Components/parameters/citerne/citerne-list/citerne-list.component.ts");
/* harmony import */ var _Components_parameters_citerne_citerne_list_update_citerne_update_citerne_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component */ "./src/app/Components/parameters/citerne/citerne-list/update-citerne/update-citerne.component.ts");
/* harmony import */ var _Components_home_Recette_releveIndex_list_releveIndex_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components/home/Recette/releveIndex-list/releveIndex-list.component */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-list.component.ts");
/* harmony import */ var _Components_home_Recette_releveIndex_list_releveIndex_add_releveIndex_add_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-add/releveIndex-add.component.ts");
/* harmony import */ var _Components_home_Recette_releveIndex_list_releveIndex_edit_releveIndex_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component */ "./src/app/Components/home/Recette/releveIndex-list/releveIndex-edit/releveIndex-edit.component.ts");
/* harmony import */ var _Components_parameters_index_index_list_index_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/parameters/index/index-list/index-list.component */ "./src/app/Components/parameters/index/index-list/index-list.component.ts");
/* harmony import */ var _Components_parameters_index_index_list_index_add_index_add_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Components/parameters/index/index-list/index-add/index-add.component */ "./src/app/Components/parameters/index/index-list/index-add/index-add.component.ts");
/* harmony import */ var _Components_parameters_index_index_list_index_edit_index_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/parameters/index/index-list/index-edit/index-edit.component */ "./src/app/Components/parameters/index/index-list/index-edit/index-edit.component.ts");





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _Components_Authentification_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _Components_Authentification_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_9__["ParametersComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _Components_parameters_Carte_Bon_card_type_list_card_type_add_card_type_add_component__WEBPACK_IMPORTED_MODULE_17__["CardTypeAddComponent"],
                _Components_parameters_Carte_Bon_card_type_list_card_type_edit_card_type_edit_component__WEBPACK_IMPORTED_MODULE_18__["CardTypeEditComponent"],
                _Components_parameters_client_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_21__["ClientListComponent"],
                _Components_parameters_client_client_list_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_22__["MoreDetailsComponent"],
                _Components_parameters_client_client_list_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_23__["AddClientComponent"],
                _Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmDeleteComponent"],
                _Components_parameters_client_client_list_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_25__["UpdateClientComponent"],
                _Components_parameters_Carte_Bon_card_type_list_card_type_list_component__WEBPACK_IMPORTED_MODULE_26__["CardTypeListComponent"],
                _Components_parameters_citerne_citerne_list_add_citerne_add_citerne_component__WEBPACK_IMPORTED_MODULE_27__["AddCiterneComponent"],
                _Components_parameters_citerne_citerne_list_citerne_list_component__WEBPACK_IMPORTED_MODULE_28__["CiterneListComponent"],
                _Components_parameters_citerne_citerne_list_update_citerne_update_citerne_component__WEBPACK_IMPORTED_MODULE_29__["UpdateCiterneComponent"],
                _Components_home_Recette_releveIndex_list_releveIndex_list_component__WEBPACK_IMPORTED_MODULE_30__["ReleveIndexListComponent"],
                _Components_home_Recette_releveIndex_list_releveIndex_add_releveIndex_add_component__WEBPACK_IMPORTED_MODULE_31__["ReleveIndexAddComponent"],
                _Components_home_Recette_releveIndex_list_releveIndex_edit_releveIndex_edit_component__WEBPACK_IMPORTED_MODULE_32__["ReleveIndexEditComponent"],
                _Components_parameters_index_index_list_index_list_component__WEBPACK_IMPORTED_MODULE_33__["IndexListComponent"],
                _Components_parameters_index_index_list_index_add_index_add_component__WEBPACK_IMPORTED_MODULE_34__["IndexAddComponent"],
                _Components_parameters_index_index_list_index_edit_index_edit_component__WEBPACK_IMPORTED_MODULE_35__["IndexEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_15__["SlimLoadingBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_20__["MaterialModule"]
            ],
            entryComponents: [
                _Components_parameters_Carte_Bon_card_type_list_card_type_add_card_type_add_component__WEBPACK_IMPORTED_MODULE_17__["CardTypeAddComponent"],
                _Components_parameters_Carte_Bon_card_type_list_card_type_edit_card_type_edit_component__WEBPACK_IMPORTED_MODULE_18__["CardTypeEditComponent"],
                _Components_parameters_client_client_list_more_details_more_details_component__WEBPACK_IMPORTED_MODULE_22__["MoreDetailsComponent"],
                _Components_parameters_client_client_list_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_23__["AddClientComponent"],
                _Components_Shared_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_24__["ConfirmDeleteComponent"],
                _Components_parameters_client_client_list_update_client_update_client_component__WEBPACK_IMPORTED_MODULE_25__["UpdateClientComponent"],
                _Components_parameters_citerne_citerne_list_add_citerne_add_citerne_component__WEBPACK_IMPORTED_MODULE_27__["AddCiterneComponent"],
                _Components_home_Recette_releveIndex_list_releveIndex_add_releveIndex_add_component__WEBPACK_IMPORTED_MODULE_31__["ReleveIndexAddComponent"],
                _Components_home_Recette_releveIndex_list_releveIndex_edit_releveIndex_edit_component__WEBPACK_IMPORTED_MODULE_32__["ReleveIndexEditComponent"],
                _Components_parameters_index_index_list_index_add_index_add_component__WEBPACK_IMPORTED_MODULE_34__["IndexAddComponent"],
                _Components_parameters_index_index_list_index_edit_index_edit_component__WEBPACK_IMPORTED_MODULE_35__["IndexEditComponent"]
            ],
            providers: [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _shared_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _shared_services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_14__["TokenInterceptorService"],
                    multi: true
                }, _shared_services_carte_bon_type_service__WEBPACK_IMPORTED_MODULE_16__["CarteBonTypeService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/Guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/Guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/models/Index.model.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/Index.model.ts ***!
  \**********************************************/
/*! exports provided: Index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
var Index = /** @class */ (function () {
    function Index() {
        this.reference = '';
        this.valeurIndex = 0;
        this.carburant = '';
        this.citerne = '';
        this.distributeur = '';
    }
    return Index;
}());



/***/ }),

/***/ "./src/app/shared/models/ReleveIndex.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/models/ReleveIndex.model.ts ***!
  \****************************************************/
/*! exports provided: ReleveIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleveIndex", function() { return ReleveIndex; });
var ReleveIndex = /** @class */ (function () {
    function ReleveIndex() {
        this.reference = '';
        this.depart = 0;
        this.arrive = 0;
        this.quantite = 0;
        this.prix = 0.0;
    }
    return ReleveIndex;
}());



/***/ }),

/***/ "./src/app/shared/models/cardType.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/cardType.model.ts ***!
  \*************************************************/
/*! exports provided: CardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardType", function() { return CardType; });
var CardType = /** @class */ (function () {
    function CardType() {
        this.cardCode = '';
        this.cardDescription = '';
    }
    return CardType;
}());



/***/ }),

/***/ "./src/app/shared/models/citerne.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/citerne.model.ts ***!
  \************************************************/
/*! exports provided: Citerne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Citerne", function() { return Citerne; });
var Citerne = /** @class */ (function () {
    function Citerne() {
        this.identifiant = '';
        this.capacite = 0;
        this.contenu = 0;
        this.type = '';
    }
    return Citerne;
}());



/***/ }),

/***/ "./src/app/shared/models/client.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/client.model.ts ***!
  \***********************************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
var Client = /** @class */ (function () {
    function Client() {
        this.name = '';
        this.email = '';
        this.type = '';
        this.state = 'actif';
        this.matFisc = '';
        this.phone = null;
        this.plafondCredit = null;
        this.address = {
            city: '',
            postal: null
        };
        this.fax = null;
        this.region = '';
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.registredUrl = 'https://ppp-ss.herokuapp.com/api/register';
        this.loginUrl = 'https://ppp-ss.herokuapp.com/api/login';
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.registredUrl, user);
    };
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.loginUrl, user);
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/carte-bon-type.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/carte-bon-type.service.ts ***!
  \***********************************************************/
/*! exports provided: CarteBonTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarteBonTypeService", function() { return CarteBonTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CarteBonTypeService = /** @class */ (function () {
    function CarteBonTypeService(http) {
        this.http = http;
        this.uri = 'https://ppp-ss.herokuapp.com/cardType';
        this.cardTypes = [];
        this.cardTypesMatTab = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.cardTypes);
    }
    CarteBonTypeService.prototype.addCardType = function (cardType) {
        return this.http.post(this.uri + "/add", cardType);
    };
    CarteBonTypeService.prototype.getCardTypesList = function (sort, paginator) {
        var _this = this;
        this.http.get(this.uri + "/list").subscribe(function (data) {
            _this.cardTypes = data;
            _this.cardTypes = _this.cardTypes.reverse();
            _this.cardTypesMatTab.data = _this.cardTypes;
            if (sort) {
                _this.cardTypesMatTab.sort = sort;
            }
            if (paginator) {
                _this.cardTypesMatTab.paginator = paginator;
            }
        }, function (err) {
            console.log(err);
        });
    };
    CarteBonTypeService.prototype.editCardType = function (id) {
        return this.http.get(this.uri + "/edit/" + id);
    };
    CarteBonTypeService.prototype.updateCardType = function (id, cardType) {
        return this.http.put(this.uri + "/update/" + id, cardType);
    };
    CarteBonTypeService.prototype.deleteCardType = function (id) {
        return this.http.delete(this.uri + "/delete/" + id);
    };
    CarteBonTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CarteBonTypeService);
    return CarteBonTypeService;
}());



/***/ }),

/***/ "./src/app/shared/services/citerne.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/citerne.service.ts ***!
  \****************************************************/
/*! exports provided: CiterneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiterneService", function() { return CiterneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CiterneService = /** @class */ (function () {
    function CiterneService(http) {
        this.http = http;
        this.uri = 'https://ppp-ss.herokuapp.com/citerne';
        this.citernes = [];
        this.citernesMatTab = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.citernes);
    }
    // get citernes list
    CiterneService.prototype.getCiternesList = function (sort, paginator) {
        var _this = this;
        this.http.get(this.uri + "/list").subscribe(function (res) {
            var key = 'citernes';
            _this.citernes = res[key];
            _this.citernes = _this.citernes.reverse();
            _this.citernesMatTab.data = _this.citernes;
            if (sort) {
                _this.citernesMatTab.sort = sort;
            }
            if (paginator) {
                _this.citernesMatTab.paginator = paginator;
            }
        }, function (err) {
            console.log(err);
        });
    };
    // add new citerne
    CiterneService.prototype.addCiterne = function (citerne) {
        var request = { citerne: citerne };
        return this.http.post(this.uri + "/add", request);
    };
    // delete Citerne
    CiterneService.prototype.deleteCiterne = function (id) {
        return this.http.delete(this.uri + "/delete/" + id);
    };
    // update Citerne
    CiterneService.prototype.updateCiterne = function (id, citerne) {
        var request = {
            citerne: citerne
        };
        return this.http.put(this.uri + "/update/" + id, request);
    };
    CiterneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CiterneService);
    return CiterneService;
}());



/***/ }),

/***/ "./src/app/shared/services/client.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.uri = 'https://ppp-ss.herokuapp.com/client';
        this.clients = [];
        this.clientsMatTab = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.clients);
    }
    // get clients list
    ClientService.prototype.getClientsList = function (sort, paginator) {
        var _this = this;
        this.http.get(this.uri + "/list").subscribe(function (res) {
            var key = 'clients';
            _this.clients = res[key];
            _this.clients = _this.clients.reverse();
            _this.clientsMatTab.data = _this.clients;
            if (sort) {
                _this.clientsMatTab.sort = sort;
            }
            if (paginator) {
                _this.clientsMatTab.paginator = paginator;
            }
        }, function (err) {
            console.log(err);
        });
    };
    // add new client
    ClientService.prototype.addClient = function (client) {
        var request = { client: client };
        return this.http.post(this.uri + "/add", request);
    };
    // delete Client
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete(this.uri + "/delete/" + id);
    };
    // update Client
    ClientService.prototype.updateClient = function (id, client) {
        var request = {
            client: client
        };
        return this.http.put(this.uri + "/update/" + id, request);
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/index.service.ts ***!
  \**************************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var IndexService = /** @class */ (function () {
    function IndexService(http) {
        this.http = http;
        this.uri = 'http://localhost:5000/index';
        this.indexs = [];
        this.indexsMatTab = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.indexs);
    }
    IndexService.prototype.addIndex = function (index) {
        return this.http.post(this.uri + "/add", index);
    };
    IndexService.prototype.getIndexList = function (sort, paginator) {
        var _this = this;
        this.http.get(this.uri + "/list").subscribe(function (data) {
            _this.indexs = data;
            _this.indexs = _this.indexs.reverse();
            _this.indexsMatTab.data = _this.indexs;
            if (sort) {
                _this.indexsMatTab.sort = sort;
            }
            if (paginator) {
                _this.indexsMatTab.paginator = paginator;
            }
        }, function (err) {
            console.log(err);
        });
    };
    IndexService.prototype.editIndex = function (id) {
        return this.http.get(this.uri + "/edit/" + id);
    };
    IndexService.prototype.updateIndex = function (id, index) {
        return this.http.put(this.uri + "/update/" + id, index);
    };
    IndexService.prototype.deleteIndex = function (id) {
        return this.http.delete(this.uri + "/delete/" + id);
    };
    IndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/app/shared/services/notification.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/notification.service.ts ***!
  \*********************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.panel = 'panelClass';
        this.config = {
            duration: 1500,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    NotificationService.prototype.success = function (msg) {
        this.config[this.panel] = ['notification', 'success'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService.prototype.warn = function (msg) {
        this.config[this.panel] = ['notification', 'warn'];
        this.snackBar.open(msg, '', this.config);
    };
    NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/releveIndex.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/releveIndex.service.ts ***!
  \********************************************************/
/*! exports provided: ReleveIndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleveIndexService", function() { return ReleveIndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ReleveIndexService = /** @class */ (function () {
    function ReleveIndexService(http) {
        this.http = http;
        this.uri = 'http://localhost:5000/recette';
        this.releveIndexs = [];
        this.releveIndexsMatTab = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.releveIndexs);
    }
    ReleveIndexService.prototype.addReleveIndex = function (releveIndex) {
        return this.http.post(this.uri + "/addReleveIndex", releveIndex);
    };
    ReleveIndexService.prototype.getReleveIndexsList = function (sort, paginator) {
        var _this = this;
        this.http.get(this.uri + "/listReleveIndex").subscribe(function (data) {
            _this.releveIndexs = data;
            _this.releveIndexs = _this.releveIndexs.reverse();
            _this.releveIndexsMatTab.data = _this.releveIndexs;
            if (sort) {
                _this.releveIndexsMatTab.sort = sort;
            }
            if (paginator) {
                _this.releveIndexsMatTab.paginator = paginator;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ReleveIndexService.prototype.editReleveIndex = function (id) {
        return this.http.get(this.uri + "/editReleveIndex/" + id);
    };
    ReleveIndexService.prototype.updateReleveIndex = function (id, index) {
        return this.http.put(this.uri + "/updateReleveIndex/" + id, index);
    };
    ReleveIndexService.prototype.deleteReleveIndex = function (id) {
        return this.http.delete(this.uri + "/deleteReleveIndex/" + id);
    };
    ReleveIndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReleveIndexService);
    return ReleveIndexService;
}());



/***/ }),

/***/ "./src/app/shared/services/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        this.uri = 'https://ppp-ss.herokuapp.com/session';
        this.sessions = [];
        this.sessionMatTab = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.sessions);
    }
    SessionService.prototype.getCurrentSession = function () {
        var _this = this;
        this.http.get(this.uri + "/get").subscribe(function (res) {
            var key = 'result';
            _this.sessions = res[key];
            _this.sessionMatTab.data = _this.sessions;
        }, function (err) {
            console.log(err);
        });
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/shared/services/token-interceptor.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/services/token-interceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");



var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Madou\Desktop\Content\Study\GL4\SEM2\PPP-SS\App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map