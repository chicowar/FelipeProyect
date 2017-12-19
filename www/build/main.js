webpackJsonp([8],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agendas_agendas__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__agendas_agendas__["a" /* AgendasPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-home"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Mapa" tabIcon="md-search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="ios-contacts"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Alarmas" tabIcon="md-alarm"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="md-settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the AgendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgendasPage = (function () {
    function AgendasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgendasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgendasPage');
    };
    return AgendasPage;
}());
AgendasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agendas',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/agendas/agendas.html"*/'<!--\n  Generated template for the AgendasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>agendas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item>\n      <ion-label>Fecha y hora</ion-label>\n      <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate" min="2017" max="2020"></ion-datetime>\n    </ion-item>\n    <ion-item>\n    </ion-item>\n    <ion-item>\n      <ion-textarea rows="8" id="descripcion" placeholder="Descripcion"></ion-textarea>\n    </ion-item>\n\n    <div id="abajomenuderecha">\n        <p><a (click)="register()">Guardar</a></p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/agendas/agendas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], AgendasPage);

//# sourceMappingURL=agendas.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(50);
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
 * Generated class for the EnviadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnviadasPage = (function () {
    function EnviadasPage(navCtrl, tarjetasService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.tarjetasService = tarjetasService;
        this.tarjetasService.getTarjetas().subscribe(function (lastarjetas) {
            _this.tarjetaslist = lastarjetas;
            _this.cargatarjetasList = lastarjetas;
        });
    }
    EnviadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnviadasPage');
    };
    EnviadasPage.prototype.goToDetail = function (id, imagen_de_perfil) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: id, imagen_de_perfil: imagen_de_perfil });
    };
    EnviadasPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.tarjetaslist = this.cargatarjetasList;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.tarjetaslist = this.tarjetaslist.filter(function (v) {
            if (v.username && q) {
                if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.puesto.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return EnviadasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
], EnviadasPage.prototype, "nav", void 0);
EnviadasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-enviadas',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/enviadas/enviadas.html"*/'<!--\n  Generated template for the EnviadasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Enviadas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar  [(ngModel)]="searchQuery" (ionInput)="getItems($event)" id="busquedaslista"></ion-searchbar>\n  <ion-list>\n  <ion-item>\n    <button ion-item *ngFor="let tarjeta of tarjetaslist" (click)="goToDetail(tarjeta.id,tarjeta.imagen_de_perfil)">\n   <h2>{{ tarjeta.puesto }}</h2>\n   <p>{{ tarjeta.username }}</p>\n </button>\n </ion-item>\n </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/enviadas/enviadas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__["a" /* TarjetasService */]])
], EnviadasPage);

//# sourceMappingURL=enviadas.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(50);
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
 * Generated class for the FavoritasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritasPage = (function () {
    function FavoritasPage(navCtrl, tarjetasService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.tarjetasService = tarjetasService;
        this.tarjetasService.getTarjetas().subscribe(function (lastarjetas) {
            _this.tarjetaslist = lastarjetas;
            _this.cargatarjetasList = lastarjetas;
        });
    }
    FavoritasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritasPage');
    };
    FavoritasPage.prototype.goToDetail = function (id, imagen_de_perfil) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: id, imagen_de_perfil: imagen_de_perfil });
    };
    FavoritasPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.tarjetaslist = this.cargatarjetasList;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.tarjetaslist = this.tarjetaslist.filter(function (v) {
            if (v.username && q) {
                if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.puesto.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return FavoritasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
], FavoritasPage.prototype, "nav", void 0);
FavoritasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favoritas',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/favoritas/favoritas.html"*/'<!--\n  Generated template for the FavoritasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Favoritas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar  [(ngModel)]="searchQuery" (ionInput)="getItems($event)" id="busquedaslista"></ion-searchbar>\n  <ion-list>\n  <ion-item>\n    <button ion-item *ngFor="let tarjeta of tarjetaslist" (click)="goToDetail(tarjeta.id,tarjeta.imagen_de_perfil)">\n   <h2>{{ tarjeta.puesto }}</h2>\n   <p>{{ tarjeta.username }}</p>\n </button>\n </ion-item>\n </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/favoritas/favoritas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__["a" /* TarjetasService */]])
], FavoritasPage);

//# sourceMappingURL=favoritas.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resitro_resitro__ = __webpack_require__(157);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.signInUser = function () {
        var _this = this;
        this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        })
            .catch(function (error) {
            console.log('got an error ', error);
            _this.alert(error.message);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resitro_resitro__["a" /* ResitroPage */]);
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('email'),
    __metadata("design:type", Object)
], LoginPage.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], LoginPage.prototype, "password", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <div id="calistodo">\n  <ion-list>\n\n    <ion-img id="imagen" src="../assets/imgs/BU.jpeg"></ion-img>\n\n  <ion-item>\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" #email></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Password</ion-label>\n    <ion-input type="password" #password></ion-input>\n  </ion-item>\n\n</ion-list>\n</div>\n<div id="abajomenu">\n  <div>\n    <button id="btnentrar" ion-button (click)="signInUser()" item-left>ENTRAR</button>\n  </div>\n  <p>No tienes cuenta? <a (click)="register()">ENTRAR</a></p>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecibidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(50);
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
 * Generated class for the RecibidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecibidasPage = (function () {
    function RecibidasPage(navCtrl, tarjetasService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.tarjetasService = tarjetasService;
        this.tarjetasService.getTarjetas().subscribe(function (lastarjetas) {
            _this.tarjetaslist = lastarjetas;
            _this.cargatarjetasList = lastarjetas;
        });
    }
    RecibidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecibidasPage');
    };
    RecibidasPage.prototype.goToDetail = function (id, imagen_de_perfil) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: id, imagen_de_perfil: imagen_de_perfil });
    };
    RecibidasPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.tarjetaslist = this.cargatarjetasList;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.tarjetaslist = this.tarjetaslist.filter(function (v) {
            if (v.username && q) {
                if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.puesto.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return RecibidasPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
], RecibidasPage.prototype, "nav", void 0);
RecibidasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-recibidas',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/recibidas/recibidas.html"*/'<!--\n  Generated template for the RecibidasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recibidas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-searchbar  [(ngModel)]="searchQuery" (ionInput)="getItems($event)" id="busquedaslista"></ion-searchbar>\n  <ion-list>\n  <ion-item>\n    <button ion-item *ngFor="let tarjeta of tarjetaslist" (click)="goToDetail(tarjeta.id,tarjeta.imagen_de_perfil)">\n   <h2>{{ tarjeta.puesto }}</h2>\n   <p>{{ tarjeta.username }}</p>\n </button>\n </ion-item>\n </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/recibidas/recibidas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__["a" /* TarjetasService */]])
], RecibidasPage);

//# sourceMappingURL=recibidas.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapPage = (function () {
    function MapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.showMap();
    };
    MapPage.prototype.showMap = function () {
        var location = new google.maps.LatLng(51.507351, -0.127758);
        var options = {
            center: location,
            zoom: 15,
            streetViewControl: false,
            mapTypeId: 'terrain'
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map);
    };
    MapPage.prototype.addMarker = function (position, map) {
        return new google.maps.Marker({
            position: position,
            map: map
        });
    };
    return MapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], MapPage.prototype, "mapRef", void 0);
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/map/map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResitroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
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
 * Generated class for the ResitroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResitroPage = (function () {
    function ResitroPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResitroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResitroPage');
    };
    ResitroPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    ResitroPage.prototype.registerUser = function () {
        var _this = this;
        this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (data) {
            console.log('got data ', data);
            _this.alert('Registered!');
        })
            .catch(function (error) {
            console.log('got an error ', error);
            _this.alert(error.message);
        });
        console.log('Would register user with ', this.email.value, this.password.value);
    };
    return ResitroPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('email'),
    __metadata("design:type", Object)
], ResitroPage.prototype, "email", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('password'),
    __metadata("design:type", Object)
], ResitroPage.prototype, "password", void 0);
ResitroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resitro',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/resitro/resitro.html"*/'<ion-header>\n  <ion-navbar  color="primary">\n    <ion-title>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<ion-slides pager>\n\n    <ion-slide style="background-color: white" padding>\n      <ion-img id="imagen2" src="../assets/imgs/imagenmono.png"></ion-img>\n      <p id="TextoP">\n        Haz de tu negocio más de lo que imaginas !\n      </p>\n      <p id="TextoS">\n        Ten la información que necesitas\n        en segundos de tus clientes\n        potenciales\n      </p>\n    </ion-slide>\n\n    <ion-slide style="background-color: white" padding>\n      <ion-list >\n      <ion-img id="imagen" src="../assets/imgs/BU.jpeg"></ion-img>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" #email></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" #password></ion-input>\n      </ion-item>\n\n    </ion-list>\n\n    <div>\n      <button id="btnregistrar" ion-button (click)="registerUser()" item-left>Registrar</button>\n    </div>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/resitro/resitro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], ResitroPage);

//# sourceMappingURL=resitro.js.map

/***/ }),

/***/ 167:
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
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agendas/agendas.module": [
		489,
		7
	],
	"../pages/detail/detail.module": [
		490,
		6
	],
	"../pages/enviadas/enviadas.module": [
		491,
		5
	],
	"../pages/favoritas/favoritas.module": [
		492,
		4
	],
	"../pages/login/login.module": [
		493,
		3
	],
	"../pages/map/map.module": [
		494,
		2
	],
	"../pages/recibidas/recibidas.module": [
		495,
		1
	],
	"../pages/resitro/resitro.module": [
		496,
		0
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
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, afAuth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
    }
    AboutPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmación',
            message: '¿Realmente desea cerrar sesion?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: function () {
                        console.log('Sesion cerrada');
                        _this.logoutUser();
                    }
                }
            ]
        });
        alert.present();
    };
    AboutPage.prototype.logoutUser = function () {
        this.afAuth.auth.signOut();
        location.reload();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-list>\n      <button ion-item detail-none  id="btnlogout" (click)="presentConfirm()">\n        <ion-icon name="md-log-out" item-start></ion-icon>\n        Cerrar sesion\n      </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_detail__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, tarjetasService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.tarjetasService = tarjetasService;
        this.tarjetasService.getTarjetas().subscribe(function (lastarjetas) {
            _this.tarjetaslist = lastarjetas;
            _this.cargatarjetasList = lastarjetas;
        });
        this.busquedaslista = "publica";
    }
    ContactPage.prototype.goToDetail = function (id, imagen_de_perfil) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: id, imagen_de_perfil: imagen_de_perfil });
    };
    ContactPage.prototype.createContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__detail_detail__["a" /* DetailPage */], { id: 0 });
    };
    ContactPage.prototype.selectedPublicos = function () {
        var _this = this;
        this.tarjetasService.getTarjetas().subscribe(function (lastarjetas) {
            _this.tarjetaslist = lastarjetas;
            _this.cargatarjetasList = lastarjetas;
        });
        this.searchQuery = '';
    };
    ContactPage.prototype.selectedContactos = function () {
        this.tarjetaslist = [];
        this.cargatarjetasList = [];
        this.searchQuery = '';
    };
    ContactPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.tarjetaslist = this.cargatarjetasList;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.tarjetaslist = this.tarjetaslist.filter(function (v) {
            if (v.username && q) {
                if (v.username.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                if (v.puesto.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    return ContactPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('myNav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */])
], ContactPage.prototype, "nav", void 0);
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contactos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content onload=\'iniciar()\'>\n  <!-- Segment buttons with text -->\n  <ion-segment [(ngModel)]="busquedaslista" color="primary">\n    <ion-segment-button value="publica" (ionSelect)="selectedPublicos()">\n      Públicos\n    </ion-segment-button>\n    <ion-segment-button value="contactos" (ionSelect)="selectedContactos()">\n      Mis contactos\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-searchbar  [(ngModel)]="searchQuery" (ionInput)="getItems($event)" id="busquedaslista"></ion-searchbar>\n\n  <ion-list>\n  <ion-item>\n    <button ion-item *ngFor="let tarjeta of tarjetaslist" (click)="goToDetail(tarjeta.id,tarjeta.imagen_de_perfil)">\n     <h2>{{ tarjeta.puesto }}</h2>\n     <p>{{ tarjeta.username }}</p>\n   </button>\n </ion-item>\n </ion-list>\n\n<div padding>\n<button ion-button block (click)="createContact()"> Crear contacto</button>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__["a" /* TarjetasService */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enviadas_enviadas__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recibidas_recibidas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favoritas_favoritas__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, tarjetasService, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.tarjetasService = tarjetasService;
        this.tarjeta = {};
        this.id = "";
        afAuth.authState.subscribe(function (user) {
            _this.id = user.uid;
            if (_this.id != '0') {
                tarjetasService.getTarjeta(_this.id)
                    .valueChanges().subscribe(function (tarjeta) {
                    _this.tarjeta = tarjeta;
                    tarjetasService.getImagen(_this.id, _this.tarjeta, '1', document.querySelector('#imglog'));
                    tarjetasService.getImagenCompany(_this.id, _this.tarjeta, '1', document.querySelector('#imglogcompany'));
                });
            }
        });
    }
    HomePage.prototype.enviadasdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__enviadas_enviadas__["a" /* EnviadasPage */]);
    };
    HomePage.prototype.Recibidasdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recibidas_recibidas__["a" /* RecibidasPage */]);
    };
    HomePage.prototype.Favoritasdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__favoritas_favoritas__["a" /* FavoritasPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/home/home.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil de {{tarjeta.username}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-slides pager="true">\n      <ion-slide class="header">\n          <img id="imglog" src=""/>\n       </ion-slide>\n      <ion-slide class="header">\n        <img id="imglogcompany" src=""/>\n      </ion-slide>\n    </ion-slides>\n\n    <ion-item>\n      <ion-label> Connecciones de {{tarjeta.username}} </ion-label>\n    </ion-item>\n\n    <ion-item>\n     <ion-input disabled (click)="enviadasdetail()"  type="text" [(ngModel)]="\'Enviadas:  \'+tarjeta.Enviadas"></ion-input>\n    </ion-item>\n\n    <ion-item>\n     <ion-input disabled (click)="Recibidasdetail()"  type="text" [(ngModel)]="\'Recibidas:  \'+tarjeta.Recibidas"></ion-input>\n    </ion-item>\n\n    <ion-item>\n     <ion-input disabled (click)="Favoritasdetail()"  type="text" [(ngModel)]="\'Favoritas:  \'+tarjeta.Favoritas"></ion-input>\n    </ion-item>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_tarjetas_service__["a" /* TarjetasService */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(331);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_resitro_resitro__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_map_map__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_tarjetas_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_agendas_agendas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_enviadas_enviadas__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_recibidas_recibidas__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_favoritas_favoritas__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebaseConfig = {
    apiKey: "AIzaSyD7fnd4lstP7klHMW8kpGFAtI0iYWWcodg",
    authDomain: "felipe-29121.firebaseapp.com",
    databaseURL: "https://felipe-29121.firebaseio.com",
    projectId: "felipe-29121",
    storageBucket: "felipe-29121.appspot.com",
    messagingSenderId: "428661649011"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_resitro_resitro__["a" /* ResitroPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_agendas_agendas__["a" /* AgendasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_enviadas_enviadas__["a" /* EnviadasPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_recibidas_recibidas__["a" /* RecibidasPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_favoritas_favoritas__["a" /* FavoritasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/agendas/agendas.module#AgendasPageModule', name: 'AgendasPage', segment: 'agendas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detail/detail.module#DetailPageModule', name: 'DetailPage', segment: 'detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/enviadas/enviadas.module#EnviadasPageModule', name: 'EnviadasPage', segment: 'enviadas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favoritas/favoritas.module#FavoritasPageModule', name: 'FavoritasPage', segment: 'favoritas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recibidas/recibidas.module#RecibidasPageModule', name: 'RecibidasPage', segment: 'recibidas', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resitro/resitro.module#ResitroPageModule', name: 'ResitroPage', segment: 'resitro', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["b" /* AngularFireAuthModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_resitro_resitro__["a" /* ResitroPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_agendas_agendas__["a" /* AgendasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_enviadas_enviadas__["a" /* EnviadasPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_recibidas_recibidas__["a" /* RecibidasPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_favoritas_favoritas__["a" /* FavoritasPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["a" /* AngularFireDatabase */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__services_tarjetas_service__["a" /* TarjetasService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TarjetasService = (function () {
    function TarjetasService(afDB) {
        this.afDB = afDB;
        this.tarjetas = [];
    }
    TarjetasService.prototype.getTarjetas = function () {
        return this.afDB.list("usuarios/").valueChanges();
        /*Otras forma
            this.countryRef = firebase.database().ref('/countries');
            this.countryRef.on('value', countryList => {
            let countries = [];
            countryList.forEach( country => {
              countries.push(country.val());
              return false;
            });
      
            this.countryList = countries;
            this.loadedCountryList = countries;
          });
          return this.countries;
        */
    };
    TarjetasService.prototype.getImagen = function (id, imagen_de_perfil, identificador, inputhtml) {
        // Create a reference with an initial file path and name
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]();
        // Points to the root reference
        //var storageRef = firebase.storage().ref();
        var storageRef = storage.refFromURL('gs://felipe-29121.appspot.com/');
        // Points to 'images'
        var imagesRef = storageRef.child('usuarios');
        // Points to 'uid'
        // Note that you can use variables to create child values
        var uidRef = imagesRef.child(id);
        // Points to 'file'
        // Note that you can use variables to create child values
        var fullRef = uidRef.child(imagen_de_perfil.imagen_de_perfil);
        fullRef.getDownloadURL().then(function (url) {
            // `url` is the download URL for 'images/stars.jpg'
            var test = url;
            inputhtml.src = test;
        }).catch(function (error) {
            uidRef = imagesRef.child('default/default.png');
            uidRef.getDownloadURL().then(function (url) {
                // `url` is the download URL for 'images/stars.jpg'
                var test = url;
                inputhtml.src = test;
            }).catch(function (error) {
            });
        });
        /*
          // File path is 'images/space.jpg'
          var path = fullRef.fullPath
        
          // File name is 'space.jpg'
          var name = fullRef.name
        
          return path;
          //return this.tarjetas;
          */
    };
    TarjetasService.prototype.getImagenCompany = function (id, imagen_de_perfil, identificador, inputhtml) {
        // Create a reference with an initial file path and name
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]();
        var storageRef = storage.refFromURL('gs://felipe-29121.appspot.com/');
        // Points to 'images'
        var imagesRef = storageRef.child('Empresa');
        var uidRef = imagesRef.child(imagen_de_perfil.empresauid);
        var namearchivo = "";
        var rootRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref();
        var usuariosRef = rootRef.child('Empresa/');
        var empresa = usuariosRef.child(imagen_de_perfil.empresauid);
        empresa.once('value').then(function (snapshot) {
            namearchivo = (snapshot.val() && snapshot.val().archivo) || '';
            if (namearchivo != '') {
                var fullRef = uidRef.child(namearchivo);
                fullRef.getDownloadURL().then(function (url) {
                    // `url` is the download URL for 'images/stars.jpg'
                    var test = url;
                    inputhtml.src = test;
                }).catch(function (error) {
                    uidRef = imagesRef.child('default/companyDefault.png');
                    uidRef.getDownloadURL().then(function (url) {
                        // `url` is the download URL for 'images/stars.jpg'
                        var test = url;
                        inputhtml.src = test;
                    }).catch(function (error) {
                    });
                    // Handle any errors
                });
            }
            else {
                uidRef = imagesRef.child('default/companyDefault.png');
                uidRef.getDownloadURL().then(function (url) {
                    // `url` is the download URL for 'images/stars.jpg'
                    var test = url;
                    inputhtml.src = test;
                }).catch(function (error) {
                });
            }
        });
    };
    TarjetasService.prototype.getImagen2 = function (id, imagen_de_perfil, identificador, inputhtml) {
        // Create a reference with an initial file path and name
        var storage = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]();
        // Points to the root reference
        //var storageRef = firebase.storage().ref();
        var storageRef = storage.refFromURL('gs://felipe-29121.appspot.com/');
        // Points to 'images'
        var imagesRef = storageRef.child('usuarios');
        // Points to 'uid'
        // Note that you can use variables to create child values
        var uidRef = imagesRef.child(id);
        // Points to 'file'
        // Note that you can use variables to create child values
        var fullRef = uidRef.child(imagen_de_perfil);
        fullRef.getDownloadURL().then(function (url) {
            // `url` is the download URL for 'images/stars.jpg'
            var test = url;
            inputhtml.src = test;
        }).catch(function (error) {
            // Handle any errors
        });
        /*
          // File path is 'images/space.jpg'
          var path = fullRef.fullPath
        
          // File name is 'space.jpg'
          var name = fullRef.name
        
          return path;
          //return this.tarjetas;
          */
    };
    TarjetasService.prototype.getTarjeta = function (id) {
        return this.afDB.object("usuarios/" + id);
        // return this.tarjetas.filter(function(e, i){ return e.id == id })[0] || {email:null, empresauid:null, id:null, imagen_de_perfil:null, lat:null, lng:null,  phone:null, puesto:null, ubicacion:null, username:null};
    };
    TarjetasService.prototype.createTarjeta = function (tarjeta) {
        this.afDB.database.ref("usuarios/" + tarjeta.id).set(tarjeta);
        //this.tarjetas.push(tarjeta);
    };
    TarjetasService.prototype.addcontacto = function (id, iduser) {
        this.afDB.database.ref("interacciones/recibidas/" + iduser).update((_a = {}, _a[id] = id, _a));
        var _a;
        //this.tarjetas.push(tarjeta);
    };
    TarjetasService.prototype.editTarjeta = function (tarjeta) {
        this.afDB.database.ref("usuarios/" + tarjeta.id).set(tarjeta);
        /*  for(let i = 0; i < this.tarjetas.length; i++) {
             if(this.tarjetas[i].id == tarjeta.id){
               this.tarjetas[i] = tarjeta;
             }
          }*/
    };
    TarjetasService.prototype.deleteTarjeta = function (tarjeta) {
        this.afDB.database.ref("usuarios/" + tarjeta.id).remove(tarjeta);
        /*for(let i = 0; i < this.tarjetas.length; i++) {
           if(this.tarjetas[i].id == tarjeta.id){
             this.tarjetas.splice(i, 1);
           }
        }*/
    };
    return TarjetasService;
}());
TarjetasService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], TarjetasService);

var _a;
//# sourceMappingURL=tarjetas.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';

//import { MapPage } from '../pages/map/map';
//import { ContactPage } from '../pages/contact/contact';
//import { AgendasPage } from '../pages/agendas/agendas';


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                authObserver.unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tarjetas_service__ = __webpack_require__(38);
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
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, tarjetasService, afAuth, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tarjetasService = tarjetasService;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.tarjeta = {};
        this.id = null;
        this.imagen_de_perfil = null;
        this.idlog = "";
        this.imagen_de_perfil = navParams.get('imagen_de_perfil');
        this.id = navParams.get('id');
        if (this.id != 0) {
            tarjetasService.getTarjeta(this.id)
                .valueChanges().subscribe(function (tarjeta) {
                _this.tarjeta = tarjeta;
                if (_this.imagen_de_perfil != null) {
                    tarjetasService.getImagen2(_this.id, _this.imagen_de_perfil, '2', document.querySelector('#imgunit'));
                }
            });
        }
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    DetailPage.prototype.addTarjeta = function () {
        if (this.id != 0) {
            /*      // estamos ediantdo
                  this.tarjetasService.editTarjeta(this.tarjeta);
                  alert('Nota editada con exito');
                }else {
                  this.tarjeta.id = Date.now();
                  this.tarjetasService.createTarjeta(this.tarjeta);
                  alert('Nota Creada con exito');*/
        }
        this.navCtrl.pop();
    };
    DetailPage.prototype.agregarcontacto = function () {
        var _this = this;
        if (this.id != 0) {
            this.afAuth.authState.subscribe(function (user) {
                _this.idlog = user.uid;
                _this.tarjetasService.addcontacto(_this.id, _this.idlog);
            });
            var alert = this.alertCtrl.create({
                title: 'Confirmacion',
                subTitle: 'Contacto agregado correctamente',
                buttons: ['Aceptar']
            });
            alert.present();
        }
    };
    DetailPage.prototype.deleteTarjeta = function () {
        this.tarjetasService.deleteTarjeta(this.tarjeta);
        alert('Nota Eliminada con exito');
        this.navCtrl.pop();
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/detail/detail.html"*/'<!--\n  Generated template for the DetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Perfil de usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <img  id="imgunit" src="">\n\n    <ion-item>\n      <ion-label floating>Puesto</ion-label>\n     <ion-input type="text" [(ngModel)]="tarjeta.puesto"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Descripcion</ion-label>\n     <ion-textarea [(ngModel)]="tarjeta.username"></ion-textarea>\n    </ion-item>\n\n    <div padding>\n    <button *ngIf="id != 0" ion-button block (click)="agregarcontacto()"> Agregar contacto</button>\n    <button ion-button block (click)="addTarjeta()"> Guardar contacto</button>\n    <button *ngIf="id != 0" ion-button block (click)="deleteTarjeta()" color="danger"> Eliminar contacto</button>\n    </div>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/jonathangomez/Documents/apps/FelipeProyect/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_tarjetas_service__["a" /* TarjetasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tarjetas_service__["a" /* TarjetasService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
], DetailPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=detail.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.js.map