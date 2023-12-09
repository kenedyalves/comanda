webpackJsonp([6],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_produto_service__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl, produtoService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.produtoService = produtoService;
    }
    HomePage.prototype.presentLoading = function () {
        var present = this.loadingCtrl.create({
            content: 'Buscando...',
            duration: 4000,
            dismissOnPageChange: true
        });
        return present;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        if (window.localStorage['api'])
            this.getMaisVendidos();
        else
            alert('No ha sido posible identificar el path del Servidor');
    };
    HomePage.prototype.add = function (produto) {
        this.navCtrl.push('AdicionarProdutoPage', { produto: produto });
    };
    HomePage.prototype.onInput = function () {
        var _this = this;
        if (this.myInput.length > 1) {
            this.produtoService.pesquisa(this.myInput)
                .subscribe(function (data) {
                console.log(data);
                _this.produtos = data;
            }, function (err) {
                console.error(err);
            });
        }
    };
    HomePage.prototype.getMaisVendidos = function () {
        var _this = this;
        var present = this.presentLoading();
        present.present();
        this.produtoService.maisPedidos()
            .subscribe(function (data) {
            console.log(data);
            _this.produtos = data;
            present.dismiss();
        }, function (err) {
            console.error(err);
            present.dismiss();
            alert('Verifique el path del servidor');
        });
    };
    HomePage.prototype.verMesas = function () {
        this.navCtrl.push('MesasPage');
    };
    HomePage.prototype.verComandas = function () {
        this.navCtrl.push('ComandasPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="teal">\n    <ion-title>\n      Interativo Comanda\n    </ion-title>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar color="danger" placeholder="Produto" [(ngModel)]="myInput" [showCancelButton]="shouldShowCancel"\n    (ionInput)="onInput($event)" (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n\n  <h2 text-center>PRODUCTOS MAS VENDIDOS</h2>\n  <br>\n  <ion-list>\n    <ion-item *ngFor="let p of produtos" (click)="add(p)">\n      <ion-avatar item-start>\n        <ion-icon name="cart"></ion-icon>\n      </ion-avatar>\n      <h1>{{p.nome}}</h1>\n      <h4>Categoria: {{p.categoria.nome}}</h4>\n      <h3 *ngIf="p.categoria.nome != \'Pizza\' && p.categoria.nome != \'Pizzas\'\n      && p.categoria.nome != \'pizza\' && p.categoria.nome != \'pizzas\'" style="color: maroon">Valor: {{p.valor_venda.toLocaleString(\'pt-br\')}}</h3>\n      <h3 *ngIf="p.categoria.nome == \'Pizza\' || p.categoria.nome == \'Pizzas\'\n      || p.categoria.nome == \'pizza\' || p.categoria.nome == \'pizzas\'" style="color: maroon">Valor: por tamaño</h3>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <button (click)="verComandas()" ion-button block color="primary">Ver Comandas</button>\n  <button (click)="verMesas()" ion-button block color="secondary">Ver Mesas</button>\n</ion-footer>'/*ion-inline-end:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_produto_service__["a" /* ProdutoService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=6.js.map