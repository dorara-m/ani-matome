/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_module/_hello.ts":
/*!**********************************!*\
  !*** ./src/js/_module/_hello.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": function() { return /* binding */ hello; }\n/* harmony export */ });\nfunction hello(message) {\n    console.log(message);\n}\n\n\n//# sourceURL=webpack://animatome/./src/js/_module/_hello.ts?");

/***/ }),

/***/ "./src/js/assets/js/script.ts":
/*!************************************!*\
  !*** ./src/js/assets/js/script.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_module/_hello */ \"./src/js/_module/_hello.ts\");\n\n(0,_module_hello__WEBPACK_IMPORTED_MODULE_0__.hello)('Hello World');\n//top\nlet tabs = $('#js-tab li');\ntabs.on('click', function () {\n    $('.active').removeClass('active');\n    $(this).addClass('active');\n    const index = tabs.index(this);\n    $('#js-cnt > li').eq(index).addClass('active');\n});\n//top - releaseNote\nconst wrapDom = document.getElementById('js-note-wrap');\nconst overlayDom = document.getElementById('js-note-overlay');\nconst ballonDom = document.getElementById('js-note-ballon');\nif (overlayDom && wrapDom) {\n    overlayDom.addEventListener('click', function () {\n        wrapDom.classList.add('none');\n    });\n    if (ballonDom) {\n        ballonDom.addEventListener('click', function () {\n            wrapDom.classList.remove('none');\n        });\n    }\n}\ndocument.getElementsByClassName('js-note-item')[0].addEventListener('click', function () {\n    const listDom = document.getElementById('js-note-list');\n    const pageDom = document.getElementById('js-note-page');\n    const backDom = document.getElementById('js-note-back');\n    if (listDom && pageDom) {\n        listDom.classList.add('slideOut');\n        pageDom.classList.add('slideIn');\n        if (backDom) {\n            backDom.addEventListener('click', function () {\n                listDom.classList.remove('slideOut');\n                pageDom.classList.remove('slideIn');\n            });\n        }\n    }\n});\n//pages\n$('#js-reload').on('click', function () {\n    location.reload();\n});\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/assets/js/script.ts");
/******/ 	
/******/ })()
;