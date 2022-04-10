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

eval("\n// 処理\nconst script = () => {\n    const animeDom = document.getElementById(\"anime\");\n    const videoDom = document.getElementById(\"video\");\n    if (!animeDom || !videoDom)\n        return;\n    const videoTimeDom = document.querySelectorAll(\".videoTime\")[0];\n    // 起動したいタイミング指定\n    // @todo 数字で指定できると楽。\n    const array = ['0:04', '0:08', '0:13', '0:17', '0:22', '0:26'];\n    videoDom.addEventListener('timeupdate', () => {\n        // @todo 現状だと処理が動きすぎる感もあり…どこかで絞りたい\n        if (videoDom.currentTime !== 0) {\n            console.log(videoDom.currentTime);\n            videoTimeDom.innerHTML = timeConvert(videoDom.currentTime);\n            // 特定の秒数のときアニメ起動。\n            if (array.includes(timeConvert(videoDom.currentTime))) {\n                animeDom?.classList.add('active');\n            }\n            else {\n                animeDom?.classList.remove('active');\n            }\n        }\n        else {\n            videoTimeDom.innerHTML = '0:00';\n            // console.log('0:00')\n        }\n    });\n};\n//数値型から”00：00”表記への変換（秒、ミリ秒の場合）\nconst timeConvert = (time) => {\n    // 小数点切り上げ\n    // 0:をくっつける(仮)\n    return '0:' + String(Math.ceil(time)).padStart(2, '0');\n};\nscript();\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/videoTiming.ts?");

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