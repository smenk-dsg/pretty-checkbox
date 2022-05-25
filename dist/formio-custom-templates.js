/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FormioCustomTemplate"] = factory();
	else
		root["FormioCustomTemplate"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/module.js":
/*!***********************!*\
  !*** ./lib/module.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./lib/templates/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    templates: _templates__WEBPACK_IMPORTED_MODULE_0__.default,\n});\n\n\n//# sourceURL=webpack://FormioCustomTemplate/./lib/module.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/index.js":
/*!******************************************!*\
  !*** ./lib/templates/bootstrap/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./survey */ \"./lib/templates/bootstrap/survey/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    survey: _survey__WEBPACK_IMPORTED_MODULE_0__.default\n});\n\n\n//# sourceURL=webpack://FormioCustomTemplate/./lib/templates/bootstrap/index.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/survey/form.ejs.js":
/*!****************************************************!*\
  !*** ./lib/templates/bootstrap/survey/form.ejs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<h1>TEST</h1>\\n<table class=\"table table-striped table-bordered\" aria-labelledby=\"l-' +\n((__t = (ctx.instance.id)) == null ? '' : __t) +\n'-' +\n((__t = (ctx.component.key)) == null ? '' : __t) +\n'\">\\n    <thead>\\n      <tr>\\n        <th></th>\\n        ';\n ctx.component.values.forEach(function(value) { ;\n__p += '\\n        <th style=\"text-align: center;\">\\n          ' +\n((__t = (ctx.t(value.label, { _userInput: true }))) == null ? '' : __t) +\n'\\n          ';\n if (value.tooltip) { ;\n__p += '\\n            <i ref=\"tooltip\" class=\"' +\n((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +\n' text-muted\" data-tooltip=\"' +\n((__t = (value.tooltip)) == null ? '' : __t) +\n'\"></i>\\n          ';\n } ;\n__p += '\\n        </th>\\n        ';\n }) ;\n__p += '\\n      </tr>\\n    </thead>\\n    <tbody>\\n      ';\n ctx.component.questions.forEach(function(question) { ;\n__p += '\\n      <tr>\\n        <td>\\n          ' +\n((__t = (ctx.t(question.label))) == null ? '' : __t) +\n'\\n          ';\n if (question.tooltip) { ;\n__p += '\\n            <i ref=\"tooltip\" class=\"' +\n((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +\n' text-muted\" data-tooltip=\"' +\n((__t = (question.tooltip)) == null ? '' : __t) +\n'\"></i>\\n          ';\n } ;\n__p += '\\n        </td>\\n        ';\n ctx.component.values.forEach(function(value) { ;\n__p += '\\n        <td style=\"text-align: center;\">\\n          <input type=\"radio\" name=\"' +\n((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +\n'\" value=\"' +\n((__t = (value.value)) == null ? '' : __t) +\n'\" id=\"' +\n((__t = (ctx.key)) == null ? '' : __t) +\n'-' +\n((__t = (question.value)) == null ? '' : __t) +\n'-' +\n((__t = (value.value)) == null ? '' : __t) +\n'\" ref=\"input\">\\n        </td>\\n        ';\n }) ;\n__p += '\\n      </tr>\\n      ';\n }) ;\n__p += '\\n    </tbody>\\n  </table>';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioCustomTemplate/./lib/templates/bootstrap/survey/form.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/survey/html.ejs.js":
/*!****************************************************!*\
  !*** ./lib/templates/bootstrap/survey/html.ejs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("Object.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.default=function(ctx) {\nvar __t, __p = '', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n__p += '<h1>TEST</h1>\\n<table class=\"table table-striped table-bordered\">\\n    <tbody>\\n      ';\n ctx.component.questions.forEach(function(question) { ;\n__p += '\\n      <tr>\\n        <th>' +\n((__t = (ctx.t(question.label))) == null ? '' : __t) +\n'</th>\\n        <td>\\n        ';\n ctx.component.values.forEach(function(item) { ;\n__p += '\\n          ';\n if (ctx.value && ctx.value.hasOwnProperty(question.value) && ctx.value[question.value] === item.value) { ;\n__p += '\\n            ' +\n((__t = (ctx.t(item.label))) == null ? '' : __t) +\n'\\n          ';\n } ;\n__p += '\\n        ';\n }) ;\n__p += '\\n        </td>\\n      </tr>\\n      ';\n }) ;\n__p += '\\n    </tbody>\\n  </table>';\nreturn __p\n}\n\n//# sourceURL=webpack://FormioCustomTemplate/./lib/templates/bootstrap/survey/html.ejs.js?");

/***/ }),

/***/ "./lib/templates/bootstrap/survey/index.js":
/*!*************************************************!*\
  !*** ./lib/templates/bootstrap/survey/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _form_ejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.ejs */ \"./lib/templates/bootstrap/survey/form.ejs.js\");\n/* harmony import */ var _html_ejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html.ejs */ \"./lib/templates/bootstrap/survey/html.ejs.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ form: _form_ejs__WEBPACK_IMPORTED_MODULE_0__.default, html: _html_ejs__WEBPACK_IMPORTED_MODULE_1__.default });\n\n\n//# sourceURL=webpack://FormioCustomTemplate/./lib/templates/bootstrap/survey/index.js?");

/***/ }),

/***/ "./lib/templates/index.js":
/*!********************************!*\
  !*** ./lib/templates/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ \"./lib/templates/bootstrap/index.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    bootstrap: _bootstrap__WEBPACK_IMPORTED_MODULE_0__.default,\n});\n\n\n//# sourceURL=webpack://FormioCustomTemplate/./lib/templates/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/module.js");
/******/ 	__webpack_exports__ = __webpack_exports__.default;
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});