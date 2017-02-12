webpackJsonp([1,4],{

/***/ 288:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 288;


/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(398);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/src/src/main.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.persons = [{ name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg' },
            { name: 'Felipe', imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg' }];
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(456),
            styles: [__webpack_require__(455)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/src/src/app.component.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(397);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/src/src/app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/src/src/environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = ".parent {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -ms-flex-direction: row;\r\n  flex-direction: row;\r\n  -webkit-box-align: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  min-height: 100vh;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nh1,\r\np {\r\n  text-align: center;\r\n}\r\n\r\np {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  margin: auto;\r\n}\r\n\r\na:link,\r\na:hover,\r\na:active,\r\na:visited {\r\n  -webkit-transition: color 150ms;\r\n  transition: color 150ms;\r\n  color: #95a5a6;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #7f8c8d;\r\n  text-decoration: underline;\r\n}\r\n\r\n.contain {\r\n  width: 100%;\r\n}\r\n\r\n.row {\r\n  overflow-x: scroll;\r\n  width: 100%;\r\n}\r\n\r\n.row__inner {\r\n  -webkit-transition: 450ms -webkit-transform;\r\n  transition: 450ms -webkit-transform;\r\n  transition: 450ms transform;\r\n  transition: 450ms transform, 450ms -webkit-transform;\r\n  font-size: 0;\r\n  white-space: nowrap;\r\n  margin: 70.3125px 0;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.tile {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 250px;\r\n  height: 140.625px;\r\n  margin-right: 10px;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  -webkit-transition: 450ms all;\r\n  transition: 450ms all;\r\n  -webkit-transform-origin: center left;\r\n  transform-origin: center left;\r\n}\r\n\r\n.tile__img {\r\n  width: 250px;\r\n  height: 140.625px;\r\n  -o-object-fit: cover;\r\n  object-fit: cover;\r\n}\r\n\r\n.tile__details {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  font-size: 10px;\r\n  opacity: 0;\r\n  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);\r\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);\r\n  -webkit-transition: 450ms opacity;\r\n  transition: 450ms opacity;\r\n}\r\n\r\n.tile__details:after,\r\n.tile__details:before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  display: #000;\r\n}\r\n\r\n.tile__details:after {\r\n  margin-top: -25px;\r\n  margin-left: -25px;\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 3px solid #ecf0f1;\r\n  line-height: 50px;\r\n  text-align: center;\r\n  border-radius: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  z-index: 1;\r\n}\r\n\r\n.tile__details:before {\r\n  content: '▶';\r\n  left: 0;\r\n  width: 100%;\r\n  font-size: 30px;\r\n  margin-left: 7px;\r\n  margin-top: -18px;\r\n  text-align: center;\r\n  z-index: 2;\r\n}\r\n\r\n.tile:hover .tile__details {\r\n  opacity: 1;\r\n}\r\n\r\n.tile__title {\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding: 10px;\r\n}\r\n\r\n.row__inner:hover {\r\n  -webkit-transform: translate3d(-62.5px, 0, 0);\r\n  transform: translate3d(-62.5px, 0, 0);\r\n}\r\n\r\n.row__inner:hover .tile {\r\n  opacity: 0.3;\r\n}\r\n\r\n.row__inner:hover .tile:hover {\r\n  -webkit-transform: scale(1.5);\r\n  transform: scale(1.5);\r\n  opacity: 1;\r\n}\r\n\r\n.tile:hover~.tile {\r\n  -webkit-transform: translate3d(125px, 0, 0);\r\n  transform: translate3d(125px, 0, 0);\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(206, 206, 206, 0.63);\r\n  border-radius: 3px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  border-radius: 3px;\r\n  -webkit-box-shadow: inset 0 0 6px rgb(206, 206, 206);\r\n  background-color: rgba(247, 244, 244, 0.44);\r\n}\r\n\r\n::-webkit-scrollbar-corner {\r\n  display: none\r\n}\r\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <div class=\"contain\">\n    <h1>Pure CSS Netflix Video Carousel</h1>\n    <p>\n      Inspired by <a href=\"https://twitter.com/Eli_White\">Eli White's</a> article <a href=\"http://eng.wealthfront.com/2015/06/implementing-netflix-redesign.html\">Performant CSS Animations: Netflix Case Study</a>,\n      his <a href=\"http://codepen.io/TheSavior/pen/LVeYBp\">example pen</a>, and <a href=\"http://matthewjamestaylor.com/\">Matt Taylor's</a>      <a href=\"http://codepen.io/mattjamestaylor/pen/dodYPr\">CSS-only version.</a>\n    </p>\n    <div class=\"row\">\n      <div class=\"row__inner\">\n        <div class=\"tile\" *ngFor=\"let person of persons\">\n          <div class=\"tile__media\">\n            <img class=\"tile__img\" [src]=\"person.imageUrl\" alt=\"\" />\n          </div>\n          <div class=\"tile__details\">\n            <div class=\"tile__title\">\n              {{person.name}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(289);


/***/ })

},[469]);
//# sourceMappingURL=main.bundle.map