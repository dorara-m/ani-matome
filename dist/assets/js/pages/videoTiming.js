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

/***/ "./src/js/assets/js/pages/videoTiming.ts":
/*!***********************************************!*\
  !*** ./src/js/assets/js/pages/videoTiming.ts ***!
  \***********************************************/
/***/ (function() {

eval("\nconst animeDom = document.getElementById(\"anime\");\n// 仮処理\n// 3秒後に青くする\n// @todo 動画の再生をキャッチしてから起動する。\nconst tmp = () => {\n    setTimeout(() => {\n        animeDom.classList.add('active');\n    }, 3000);\n};\n// どうが再生スタートしたら\ntmp();\n// ↓現在の秒数を表示するための関数。\nlet sec = 0;\nlet intervalID;\nconst fire = () => {\n    sec += 1000;\n    animeDom.innerHTML = formatSec(sec);\n    console.log(sec);\n};\nconst formatSec = (sec) => {\n    const thousand = sec / 1000;\n    return '0:' + String(thousand).padStart(2, '0');\n};\n// 毎秒の処理\n// ここでも動画再生してからカウントはじめる。\nif (!intervalID) {\n    intervalID = setInterval(fire, 1000);\n}\n// 無限に動き続けるため、30秒で止まるように書いておく。\n// 止めるためにintervalIDを設定しておく必要あり。\nsetTimeout(() => {\n    clearInterval(intervalID);\n    intervalID = null;\n}, 30000);\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/videoTiming.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/pages/videoTiming.ts"]();
/******/ 	
/******/ })()
;