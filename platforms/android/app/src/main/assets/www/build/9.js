webpackJsonp([9],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComandasPageModule", function() { return ComandasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comandas__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComandasPageModule = /** @class */ (function () {
    function ComandasPageModule() {
    }
    ComandasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__comandas__["a" /* ComandasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comandas__["a" /* ComandasPage */]),
            ],
        })
    ], ComandasPageModule);
    return ComandasPageModule;
}());

//# sourceMappingURL=comandas.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comanda_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__ = __webpack_require__(198);
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
 * Generated class for the ComandasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComandasPage = /** @class */ (function () {
    function ComandasPage(navCtrl, alertCtrl, loadingCtrl, modalCtrl, vibration, comandaService, navParams) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.vibration = vibration;
        this.comandaService = comandaService;
        this.navParams = navParams;
        this.nenhumaComanda = false;
        this.impresso = false;
        this.erro = false;
        this.comandasAbertas = 0;
        this.total = 0.00;
    }
    ComandasPage.prototype.ionViewDidLoad = function () {
        this.getComandasAbertas();
    };
    ComandasPage.prototype.getComandasAbertas = function () {
        var _this = this;
        var present = this.presentLoading('Buscando...');
        present.present();
        this.comandaService.getOpen()
            .subscribe(function (data) {
            present.dismiss();
            console.log(data);
            _this.comandas = data;
            _this.comandasAbertas = _this.comandas.length;
            _this.somaTotal(data);
            if (data.length == 0)
                _this.nenhumaComanda = true;
        }, function (err) {
            present.dismiss();
            console.error(err);
            _this.erro = true;
        });
    };
    ComandasPage.prototype.somaTotal = function (data) {
        var _this = this;
        data.map(function (v) {
            _this.total += v.soma;
        });
    };
    ComandasPage.prototype.abrir = function () {
        this.showPrompt();
    };
    ComandasPage.prototype.itens = function (c) {
        this.navCtrl.push('ItemComandaPage', { comanda: c });
    };
    ComandasPage.prototype.modalNovaComanda = function () {
        var profileModal = this.modalCtrl.create('AbrirComandaPage');
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            console.log("Retornou");
            location.reload();
        });
    };
    ComandasPage.prototype.imprimeComanda = function (comanda) {
        var _this = this;
        var loading = this.presentLoading('imprimiendo...');
        loading.present();
        console.log(comanda);
        this.comandaService.imprimeComanda(comanda)
            .subscribe(function (data) {
            loading.dismiss();
            console.log(data);
            if (data) {
                _this.vibration.vibrate([100, 150, 100]);
                _this.impresso = true;
                setTimeout(function () {
                    _this.navCtrl.setRoot('ComandasPage');
                }, 2000);
            }
        }, function (err) {
            loading.dismiss();
            console.error(err);
            var alert = _this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Error al imprimir!',
                buttons: ['Cerrar']
            });
            alert.present();
        });
    };
    ComandasPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Abrir Comanda',
            message: "Indique el código de identificación de la comanda",
            inputs: [
                {
                    name: 'cod',
                    placeholder: 'Código',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Abrir',
                    handler: function (data) {
                    }
                }
            ]
        });
        prompt.present();
    };
    ComandasPage.prototype.presentLoading = function (mensagem) {
        var present = this.loadingCtrl.create({
            content: mensagem,
            duration: 4000,
            dismissOnPageChange: true
        });
        return present;
    };
    ComandasPage.prototype.alert = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: msg,
            buttons: ['Cerrar']
        });
        alert.present();
    };
    ComandasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-comandas',template:/*ion-inline-start:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\comandas\comandas.html"*/'<!--\n  Generated template for the ComandasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    <ion-title>Comandas Abiertas</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n<ion-content>\n  <button ion-button full color="secondary" icon-only (click)="modalNovaComanda()">\n    <ion-icon name="barcode"></ion-icon>\n    Abrir\n  </button>\n  <div *ngIf="nenhumaComanda == false">\n    <h5 text-center>COMANDAS ABIERTAS: <strong>{{comandasAbertas}}</strong></h5>\n    <h5 text-center>VALOR TOTAL: <strong>Gs {{total.toLocaleString(\'pt-br\')}}</strong></h5>\n    <ion-card *ngFor="let c of comandas" (click)="itens(c)">\n        <ion-card-header>\n        <h1 id="cod" text-center>{{c.comanda}}</h1>\n        <ion-label>Total: <strong>Gs {{c.soma.toLocaleString(\'pt-br\')}}</strong></ion-label>\n        <ion-label>Horario Apertura: <strong>{{c.data_registro | date: \'HH:mm\' }}</strong></ion-label>\n        <ion-label>Mesa: \n\n          <strong *ngIf="c.mesa" style="color: red">{{c.mesa.nome}}</strong>\n          <strong *ngIf="!c.mesa" style="color: red">AVULSA</strong>\n        </ion-label>\n      </ion-card-header>\n         <button [disabled]="!c.imprimir == 1"ion-button full color="primary" icon-only (click)="imprimeComanda(c.comanda)">\n          <ion-icon name="print">  </ion-icon>\n             Imprimir\n        </button>\n      </ion-card>\n    <button ion-button full color="secondary" icon-only (click)="modalNovaComanda()">\n      <ion-icon name="barcode"></ion-icon>\n      Abrir\n    </button>\n  </div>\n\n  <div *ngIf="nenhumaComanda == true">\n    <h4 text-center>Ninguna comanda Abierta</h4>\n\n    <!-- <button ion-button full color="secondary" icon-only (click)="abrir()">\n      <ion-icon name="barcode"></ion-icon>\n      Abrir\n    </button> -->\n  </div>\n\n  <div *ngIf="erro == true">\n    <h4 text-center>Error de comunicación</h4>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\comandas\comandas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_vibration__["a" /* Vibration */],
            __WEBPACK_IMPORTED_MODULE_2__services_comanda_service__["a" /* ComandaService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ComandasPage);
    return ComandasPage;
}());

//# sourceMappingURL=comandas.js.map

/***/ })

});
//# sourceMappingURL=9.js.map