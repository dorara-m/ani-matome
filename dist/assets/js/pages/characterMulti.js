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

/***/ "./src/js/assets/js/pages/characterMulti.ts":
/*!**************************************************!*\
  !*** ./src/js/assets/js/pages/characterMulti.ts ***!
  \**************************************************/
/***/ (function() {

eval("\nconst mvToSection = () => {\n    const doWhenIntersect = (entries) => {\n        entries.forEach((entry) => {\n            const mvDom = document.querySelector('.mv_fixed');\n            const sectionDom = document.querySelector('.fixedAnime');\n            if (!mvDom || !sectionDom)\n                return;\n            if (entry.isIntersecting) {\n                console.log('isIntersecting');\n                mvDom.classList.add('-hide');\n                sectionDom.classList.remove('-hide');\n            }\n            else {\n                console.log('isNotIntersecting');\n                mvDom.classList.remove('-hide');\n                sectionDom.classList.add('-hide');\n            }\n        });\n    };\n    const observer = new IntersectionObserver(doWhenIntersect);\n    const trigger = document.querySelector('.switchPoint');\n    if (!trigger)\n        return;\n    observer.observe(trigger);\n};\nmvToSection();\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/characterMulti.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/pages/characterMulti.ts"]();
/******/ 	
/******/ })()
;