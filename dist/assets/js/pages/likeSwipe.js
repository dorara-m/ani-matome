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

/***/ "./src/js/assets/js/pages/likeSwipe.ts":
/*!*********************************************!*\
  !*** ./src/js/assets/js/pages/likeSwipe.ts ***!
  \*********************************************/
/***/ (function() {

eval("\nconst likeSwipe = () => {\n    // console.log('swipe fire')\n    const arrowDoms = document.getElementsByClassName('js-swipe');\n    console.log(arrowDoms);\n    for (let i = 0; i < arrowDoms.length; i++) {\n        arrowDoms[i].addEventListener('click', () => {\n            const targetDom = document.getElementById('js-swipe-wrap');\n            targetDom?.classList.toggle('isSwipe');\n        });\n    }\n};\nlikeSwipe();\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/likeSwipe.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/pages/likeSwipe.ts"]();
/******/ 	
/******/ })()
;