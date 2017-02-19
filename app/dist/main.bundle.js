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
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/angular-application/src/main.js.map

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
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/angular-application/src/app.component.js.map

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
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/angular-application/src/app.module.js.map

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
//# sourceMappingURL=C:/Users/pipel/Documents/Web projects/electron/electron-quick-start/app/angular-application/src/environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.parent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100vh; }\n\n* {\n  box-sizing: border-box; }\n\nh1 {\n  text-align: center; }\n\np {\n  text-align: center;\n  width: 100%;\n  max-width: 500px;\n  margin: auto; }\n\na:link, a:hover, a:active, a:visited {\n  -webkit-transition: color 150ms;\n  transition: color 150ms;\n  color: #95a5a6;\n  text-decoration: none; }\n\na:hover {\n  color: #7f8c8d;\n  text-decoration: underline; }\n\n.contain {\n  width: 100%; }\n\n.row {\n  overflow-x: scroll;\n  width: 100%; }\n\n.row__inner {\n  -webkit-transition: 450ms -webkit-transform;\n  transition: 450ms -webkit-transform;\n  transition: 450ms transform;\n  transition: 450ms transform, 450ms -webkit-transform;\n  font-size: 0;\n  white-space: nowrap;\n  margin: 70.3125px 0;\n  padding-bottom: 10px; }\n\n.tile {\n  position: relative;\n  display: inline-block;\n  width: 250px;\n  height: 140.625px;\n  margin-right: 10px;\n  font-size: 20px;\n  cursor: pointer;\n  -webkit-transition: 450ms all;\n  transition: 450ms all;\n  -webkit-transform-origin: center left;\n  transform-origin: center left; }\n\n.tile__img {\n  width: 250px;\n  height: 140.625px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.tile__details {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  font-size: 10px;\n  opacity: 0;\n  background: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.9) 0%, transparent 100%);\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 100%);\n  -webkit-transition: 450ms opacity;\n  transition: 450ms opacity; }\n  .tile__details:after, .tile__details:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: #000; }\n  .tile__details:after {\n    margin-top: -25px;\n    margin-left: -25px;\n    width: 50px;\n    height: 50px;\n    border: 3px solid #ecf0f1;\n    line-height: 50px;\n    text-align: center;\n    border-radius: 100%;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 1; }\n  .tile__details:before {\n    content: '▶';\n    left: 0;\n    width: 100%;\n    font-size: 30px;\n    margin-left: 7px;\n    margin-top: -18px;\n    text-align: center;\n    z-index: 2; }\n\n.tile:hover .tile__details {\n  opacity: 1; }\n\n.tile__title {\n  position: absolute;\n  bottom: 0;\n  padding: 10px; }\n\n.row__inner:hover {\n  -webkit-transform: translate3d(-62.5px, 0, 0);\n  transform: translate3d(-62.5px, 0, 0); }\n  .row__inner:hover .tile {\n    opacity: 0.3; }\n    .row__inner:hover .tile:hover {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n      opacity: 1; }\n\n.tile:hover ~ .tile {\n  -webkit-transform: translate3d(125px, 0, 0);\n  transform: translate3d(125px, 0, 0); }\n\n::-webkit-scrollbar {\n  width: 0.5em;\n  height: 0.5em; }\n\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(206, 206, 206, 0.63);\n  border-radius: 1em; }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 1em;\n  -webkit-box-shadow: inset 0 0 6px #cecece;\n  background-color: rgba(247, 244, 244, 0.44); }\n\n::-webkit-scrollbar-corner {\n  display: none; }\n"

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