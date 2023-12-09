webpackJsonp([8],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* ConfigPage */]),
            ],
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());

//# sourceMappingURL=config.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comanda_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, navParams, comandaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comandaService = comandaService;
        this.path = "https://interativo.com.py";
        this.usuario = "";
        this.senha = "";
        this.usuarioConectado = "";
    }
    ConfigPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfigPage');
        var api = window.localStorage['api'];
        var usuario = JSON.parse(window.localStorage['usuario']);
        if (api && usuario) {
            this.path = api;
            this.usuario = usuario.login;
            this.usuarioConectado = usuario.nome;
        }
        else {
        }
    };
    ConfigPage.prototype.salvar = function () {
        var _this = this;
        var json = {
            usuario: this.usuario,
            senha: this.senha
        };
        var temp = JSON.stringify(json);
        this.comandaService.autenticar(this.path, temp).subscribe(function (success) {
            console.log(success);
            window.localStorage['api'] = _this.path;
            window.localStorage['usuario'] = JSON.stringify(success);
            alert('Éxitos, reinicie el App');
            _this.navCtrl.setRoot('HomePage');
        }, function (err) {
            console.log(err);
            window.localStorage['api'] = '';
            window.localStorage['usuario'] = '';
            alert('No ha sido posible conectarse');
        });
    };
    ConfigPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-config',template:/*ion-inline-start:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\config\config.html"*/'<!--\n  Generated template for the ConfigPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Config</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <h2 id="title" text-center>SERVIDOR</h2>\n      <h3 *ngIf="usuarioConectado != \'\'">Usuário conectado: <strong>{{usuarioConectado}}</strong></h3>\n    </ion-card-header>\n\n      <ion-item>\n        <ion-label floating>Path</ion-label>\n        <ion-input [(ngModel)]="path"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Usuario</ion-label>\n        <ion-input [(ngModel)]="usuario"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Contraseña</ion-label>\n        <ion-input type="password" [(ngModel)]="senha"></ion-input>\n      </ion-item>\n      <br>\n      <button color="secondary" (click)="salvar()" ion-button full >CONECTAR</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\config\config.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_comanda_service__["a" /* ComandaService */]])
    ], ConfigPage);
    return ConfigPage;
}());

//# sourceMappingURL=config.js.map

/***/ })

});
//# sourceMappingURL=8.js.map