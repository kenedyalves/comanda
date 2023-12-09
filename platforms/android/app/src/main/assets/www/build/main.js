webpackJsonp([11],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/abrir-comanda/abrir-comanda.module": [
		278,
		10
	],
	"../pages/adicionar-itens/adicionar-itens.module": [
		279,
		3
	],
	"../pages/adicionar-produto/adicionar-produto.module": [
		280,
		2
	],
	"../pages/comandas/comandas.module": [
		281,
		9
	],
	"../pages/config/config.module": [
		282,
		8
	],
	"../pages/detalhe-mesa/detalhe-mesa.module": [
		283,
		7
	],
	"../pages/fechar-comanda/fechar-comanda.module": [
		284,
		1
	],
	"../pages/home/home.module": [
		285,
		6
	],
	"../pages/item-comanda/item-comanda.module": [
		286,
		0
	],
	"../pages/mesas/mesas.module": [
		287,
		5
	],
	"../pages/modal-sabor/modal-sabor.module": [
		288,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComandaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComandaService = /** @class */ (function () {
    function ComandaService(http) {
        this.http = http;
        this.API_CONFIG = '';
        this.API_CONFIG = window.localStorage['api'];
    }
    ComandaService.prototype.autenticar = function (path, json) {
        return this.http.get(path + "/api/pedidos/autenticaUsuario?json=" + json);
    };
    ComandaService.prototype.getOpen = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidos/comandasAberta");
    };
    ComandaService.prototype.getMesas = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidos/mesas");
    };
    ComandaService.prototype.getMesasTodas = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidos/mesasTodas");
    };
    ComandaService.prototype.open = function (cod, mesa) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/abrirComanda?cod=" + cod + "&mesa=" + mesa);
    };
    ComandaService.prototype.fecharComanda = function (js) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/fecharComanda?js=" + js);
    };
    ComandaService.prototype.addProduto = function (nova_comanda, comanda, produto, quantidade, obs, adicionais, saboresExtras, tamanho, valorFlex, novaMesa) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/addProduto?nova_comanda=" + nova_comanda + "&comanda=" + comanda + "&produto=" + produto + "&quantidade=" + quantidade + "&obs=" + obs + "&adicionais=" + JSON.stringify(adicionais) + "&saboresExtras=" + JSON.stringify(saboresExtras) + "&tamanho=" + tamanho + "&valorFlex=" + valorFlex + "&novaMesa=" + novaMesa);
    };
    ComandaService.prototype.addItens = function (pedido_id, itens) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/addItens?pedido_id=" + pedido_id + "&itens=" + itens);
    };
    ComandaService.prototype.deleteItem = function (id) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/deleteItem?id=" + id);
    };
    ComandaService.prototype.imprimeComanda = function (id) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/imprimeComanda?id=" + id);
    };
    ComandaService.prototype.imprimeResumoComanda = function (id) {
        return this.http.get(this.API_CONFIG + "/api/pedidos/imprimeComandaTotal?id=" + id);
    };
    ComandaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ComandaService);
    return ComandaService;
}());

//# sourceMappingURL=comanda.service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdutoService = /** @class */ (function () {
    function ProdutoService(http) {
        this.http = http;
        this.API_CONFIG = '';
        this.API_CONFIG = window.localStorage['api'];
    }
    ProdutoService.prototype.maisPedidos = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/maisPedidos");
    };
    ProdutoService.prototype.all = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/all");
    };
    ProdutoService.prototype.adicionais = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/adicionais");
    };
    ProdutoService.prototype.tamanhosPizza = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/tamanhosPizza");
    };
    ProdutoService.prototype.saboresPorTamanho = function (tamanho, saborPrincipal) {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/saboresPorTamanho?tamanho=" + tamanho + "&saborPrincipal=" + saborPrincipal);
    };
    ProdutoService.prototype.pizzaValorPorTamanho = function (tamanho, produto) {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/pizzaValorPorTamanho?tamanho=" + tamanho + "&produto=" + produto);
    };
    ProdutoService.prototype.pesquisa = function (pesquisa) {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/pesquisaRest?pesquisa=" + pesquisa);
    };
    ProdutoService.prototype.dividePizza = function () {
        return this.http.get(this.API_CONFIG + "/api/pedidoProduto/dividePizza");
    };
    ProdutoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProdutoService);
    return ProdutoService;
}());

//# sourceMappingURL=produto.service.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_comanda_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_produto_service__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_vibration__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/abrir-comanda/abrir-comanda.module#AbrirComandaPageModule', name: 'AbrirComandaPage', segment: 'abrir-comanda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adicionar-itens/adicionar-itens.module#AdicionarItensPageModule', name: 'AdicionarItensPage', segment: 'adicionar-itens', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adicionar-produto/adicionar-produto.module#AdicionarProdutoPageModule', name: 'AdicionarProdutoPage', segment: 'adicionar-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comandas/comandas.module#ComandasPageModule', name: 'ComandasPage', segment: 'comandas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/config/config.module#ConfigPageModule', name: 'ConfigPage', segment: 'config', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-mesa/detalhe-mesa.module#DetalheMesaPageModule', name: 'DetalheMesaPage', segment: 'detalhe-mesa', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fechar-comanda/fechar-comanda.module#FecharComandaPageModule', name: 'FecharComandaPage', segment: 'fechar-comanda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-comanda/item-comanda.module#ItemComandaPageModule', name: 'ItemComandaPage', segment: 'item-comanda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mesas/mesas.module#MesasPageModule', name: 'MesasPage', segment: 'mesas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-sabor/modal-sabor.module#ModalSaborPageModule', name: 'ModalSaborPage', segment: 'modal-sabor', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__services_comanda_service__["a" /* ComandaService */],
                __WEBPACK_IMPORTED_MODULE_8__services_produto_service__["a" /* ProdutoService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "HomePage";
        this.pages = [
            { title: "PRODUTOS", component: "HomePage" },
            { title: "COMANDAS", component: "ComandasPage" },
            { title: "CONFIG", component: "ConfigPage" },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (p) {
        this.nav.setRoot(p);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\app\app.html"*/'<ion-menu [content]="content">\n <ion-header>\n     <ion-toolbar>\n         <ion-title>MENU</ion-title>\n     </ion-toolbar>\n </ion-header>\n\n <ion-content>\n     <ion-list>\n         <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.component)">\n             {{p.title}}\n         </button>\n     </ion-list>\n </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="flase"></ion-nav>\n'/*ion-inline-end:"C:\Users\KENEDY MAYRA\Documents\sistemaVendas\tentativa\App_controle_mesas\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map