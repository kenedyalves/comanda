webpackJsonp([4],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSaborPageModule", function() { return ModalSaborPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_sabor__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalSaborPageModule = /** @class */ (function () {
    function ModalSaborPageModule() {
    }
    ModalSaborPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_sabor__["a" /* ModalSaborPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_sabor__["a" /* ModalSaborPage */]),
            ],
        })
    ], ModalSaborPageModule);
    return ModalSaborPageModule;
}());

//# sourceMappingURL=modal-sabor.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSaborPage; });
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



/**
 * Generated class for the ModalSaborPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalSaborPage = /** @class */ (function () {
    function ModalSaborPage(navCtrl, viewCtrl, toastCtrl, produtoService, navParams) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.produtoService = produtoService;
        this.navParams = navParams;
        this.saboresInit = [];
        this.maximoSabores = 1;
        this.selecionados = [];
        this.jaSelecionados = [];
        this.blockBotao = false;
        this.pesquisa = '';
    }
    ModalSaborPage.prototype.ionViewDidLoad = function () {
        var tamanho = this.navParams.get("tamanho");
        var saborPrincipal = this.navParams.get("saborPrincipal");
        this.selecionados = this.jaSelecionados = this.navParams.get("selecionados");
        this.getSabores(tamanho, saborPrincipal);
    };
    ModalSaborPage.prototype.busca = function () {
        var _this = this;
        this.sabores = this.saboresInit;
        if (this.pesquisa.length > 1) {
            var v = this.sabores.filter(function (el) {
                return el.produto.produto.nome.toLowerCase().includes(_this.pesquisa);
            });
            this.sabores = v;
        }
    };
    ModalSaborPage.prototype.getSabores = function (tamanho, saborPrincipal) {
        var _this = this;
        this.produtoService.saboresPorTamanho(tamanho, saborPrincipal)
            .subscribe(function (data) {
            _this.validaJaSelecionado(data, function (res) {
                _this.saboresInit = _this.sabores = res;
                console.log(res);
                if (_this.sabores[0])
                    _this.maximoSabores = _this.sabores[0].maximo_sabores - 1;
                _this.validaSabores();
            });
        }, function (err) {
            console.log("erro: " + err);
        });
    };
    ModalSaborPage.prototype.validaSabores = function () {
        console.log("samores: " + this.maximoSabores);
        if (this.maximoSabores < 1) {
            var toast = this.toastCtrl.create({
                message: 'Tamaño para 1 sabor, seleccione otro',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            this.dissmiss();
        }
    };
    ModalSaborPage.prototype.validaJaSelecionado = function (data, call) {
        var _this = this;
        var temp = [];
        data.map(function (s) {
            if (_this.jaSelecionados.length == 0) {
                s.selecionado = false;
            }
            else {
                _this.percorreSelecionados(s, function (res) {
                    if (res)
                        s.selecionado = true;
                    else
                        s.selecionado = false;
                });
            }
            temp.push(s);
        });
        call(temp);
    };
    ModalSaborPage.prototype.percorreSelecionados = function (sabor, call) {
        var retorno = false;
        this.jaSelecionados.map(function (j) {
            if (j.produto_id == sabor.produto_id)
                retorno = true;
        });
        call(retorno);
    };
    ModalSaborPage.prototype.select = function (sabor) {
        var _this = this;
        this.verificaSaborJaIncluido(sabor, function (res) {
            if (res == false)
                _this.selecionados.push(sabor);
            else
                _this.deleteSabor(sabor);
        });
        if (this.selecionados.length >= this.maximoSabores) {
            var toast = this.toastCtrl.create({
                message: 'Maximo de sabores adicionados',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        if (this.selecionados.length > this.maximoSabores) {
            this.blockBotao = true;
        }
        else {
            this.blockBotao = false;
        }
    };
    ModalSaborPage.prototype.verificaSaborJaIncluido = function (sabor, call) {
        var retorno = false;
        this.selecionados.map(function (v) {
            if (v.id == sabor.id) {
                retorno = true;
            }
        });
        call(retorno);
    };
    ModalSaborPage.prototype.deleteSabor = function (sabor) {
        var temp = [];
        this.selecionados.map(function (v) {
            if (v.id != sabor.id)
                temp.push(v);
        });
        this.selecionados = temp;
    };
    ModalSaborPage.prototype.dissmiss = function () {
        this.viewCtrl.dismiss(this.selecionados);
    };
    ModalSaborPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-sabor',template:/*ion-inline-start:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\modal-sabor\modal-sabor.html"*/'<!--\n  Generated template for the ModalSaborPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Elija el Sabor</ion-title>\n\n    <ion-buttons start>\n\n      <button [disabled]="blockBotao" color="danger" (click)="dissmiss()" ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <h2 text-center><strong style="color: red;">{{maximoSabores}}</strong> sabor(es) maximo para este tamaño</h2>\n  <ion-searchbar placeholder="Filtro de sabor" [(ngModel)]="pesquisa" [showCancelButton]="shouldShowCancel" (keyup)="busca($event)">\n  </ion-searchbar>\n  <ion-list>\n\n    <ion-item *ngFor="let s of sabores">\n      <ion-label>{{s.produto.produto.nome}} - {{s.valor}}</ion-label>\n      <ion-checkbox checked="{{s.selecionado}}" (click)="select(s)"></ion-checkbox>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <button [disabled]="blockBotao" (click)="dissmiss()" full ion-button large color="secondary" icon-only>\n    <ion-icon name=\'checkmark-circle\'></ion-icon>\n    Elejido\n  </button>\n</ion-footer>'/*ion-inline-end:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\pages\modal-sabor\modal-sabor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__services_produto_service__["a" /* ProdutoService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ModalSaborPage);
    return ModalSaborPage;
}());

//# sourceMappingURL=modal-sabor.js.map

/***/ })

});
//# sourceMappingURL=4.js.map