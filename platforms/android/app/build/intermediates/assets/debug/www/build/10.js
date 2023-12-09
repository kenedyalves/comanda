webpackJsonp([10],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirComandaPageModule", function() { return AbrirComandaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abrir_comanda__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AbrirComandaPageModule = /** @class */ (function () {
    function AbrirComandaPageModule() {
    }
    AbrirComandaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__abrir_comanda__["a" /* AbrirComandaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__abrir_comanda__["a" /* AbrirComandaPage */]),
            ],
        })
    ], AbrirComandaPageModule);
    return AbrirComandaPageModule;
}());

//# sourceMappingURL=abrir-comanda.module.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbrirComandaPage; });
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
 * Generated class for the AbrirComandaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AbrirComandaPage = /** @class */ (function () {
    function AbrirComandaPage(navCtrl, comandaService, loadingCtrl, alertCtrl, viewCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.comandaService = comandaService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.mesa = 0;
        this.comanda = 0;
        this.getMesas();
    }
    AbrirComandaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbrirComandaPage');
    };
    AbrirComandaPage.prototype.getMesas = function () {
        var _this = this;
        this.comandaService.getMesasTodas().subscribe(function (data) {
            console.log(data);
            _this.mesas = data;
        }, function (err) {
            console.log(err);
        });
    };
    AbrirComandaPage.prototype.presentLoading = function (mensagem) {
        var present = this.loadingCtrl.create({
            content: mensagem,
            duration: 4000,
            dismissOnPageChange: true
        });
        return present;
    };
    AbrirComandaPage.prototype.postComanda = function () {
        var _this = this;
        var present = this.presentLoading('Enviando datos..');
        present.present();
        this.comandaService.open(this.comanda, this.mesa)
            .subscribe(function (data) {
            present.dismiss();
            console.log(data);
            if (data) {
                _this.viewCtrl.dismiss();
            }
            else {
                _this.alert("Esta comanda ya esta activa!");
            }
        }, function (err) {
            present.dismiss();
            console.log(err);
        });
    };
    AbrirComandaPage.prototype.alert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: msg,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    AbrirComandaPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AbrirComandaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-abrir-comanda',template:/*ion-inline-start:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\abrir-comanda\abrir-comanda.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nueva Comanda</ion-title>\n\n    <ion-buttons end>\n      <button color="danger" (click)="dismiss()" ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h5 text-center>Indique el código de identificación de la comanda</h5>\n\n  <ion-item padding>\n    <ion-label floating color="primary">Comanda</ion-label>\n    <ion-input [(ngModel)]="comanda" type="number"></ion-input>\n  </ion-item>\n\n  <ion-item padding>\n    <ion-label color="primary">MESA</ion-label>\n    <ion-select [(ngModel)]="mesa">\n      <ion-option value="0">AVULSA</ion-option>\n     \n      <ion-option *ngFor="let m of mesas" [value]="m.id">{{m.nome}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <button full (click)="postComanda()" ion-button color="secondary">Abrir</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\abrir-comanda\abrir-comanda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_comanda_service__["a" /* ComandaService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AbrirComandaPage);
    return AbrirComandaPage;
}());

//# sourceMappingURL=abrir-comanda.js.map

/***/ })

});
//# sourceMappingURL=10.js.map