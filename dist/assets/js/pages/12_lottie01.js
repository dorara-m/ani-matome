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

/***/ "./src/js/assets/js/pages/12_lottie01.ts":
/*!***********************************************!*\
  !*** ./src/js/assets/js/pages/12_lottie01.ts ***!
  \***********************************************/
/***/ (function() {

eval("\nvar params = {\n    container: document.getElementById('lottie'),\n    // アニメーションをsvg形式で出力\n    renderer: 'svg',\n    // アニメーションをループする\n    loop: false,\n    // アニメーションを読み込んだら自動で再生する\n    autoplay: true,\n    // アニメーションファイル(.json)のパス\n    path: \"../assets/json/12_lottie01.json\"\n};\n// アニメーションをロード\nvar anim = lottie.loadAnimation(params);\n// アニメーションが完了したら要素削除\nanim.addEventListener('complete', () => {\n    console.log('completed');\n    document.getElementById('lottie').remove();\n});\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/12_lottie01.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/pages/12_lottie01.ts"]();
/******/ 	
/******/ })()
;