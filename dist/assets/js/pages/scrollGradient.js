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

/***/ "./src/js/assets/js/pages/scrollGradient.ts":
/*!**************************************************!*\
  !*** ./src/js/assets/js/pages/scrollGradient.ts ***!
  \**************************************************/
/***/ (function() {

eval("\n// threshold の設定\nfunction buildThresholdList() {\n    let thresholds = [];\n    let numSteps = 20;\n    for (let i = 1; i <= numSteps; i++) {\n        let ratio = i / numSteps;\n        thresholds.push(ratio);\n    }\n    return thresholds;\n}\n// 要素が表示されたら実行する動作\nfunction showElements(entries) {\n    entries.forEach((entry) => {\n        if (entry.isIntersecting) {\n            let ratio = Math.round(entry.intersectionRatio * 100);\n            const ratioDom = document.getElementById('ratio');\n            if (!ratioDom)\n                return;\n            ratioDom.innerHTML = `※グラデーション変化量: ${ratio}`;\n            const heading = document.getElementById('heading');\n            if (!heading)\n                return;\n            heading.style.backgroundImage = `\n        linear-gradient(\n        45deg,\n        rgb(37, 47, 255) ${0 - ratio}%,\n        rgb(124, 192, 226) ${100 - ratio}%,\n        rgb(37, 47, 255) ${200 - ratio}%\n      )`;\n        }\n    });\n}\n{\n    /* @ts-ignore */\n}\nconst script = () => {\n    const p = document.getElementById('paragraph');\n    if (!p)\n        return;\n    const options = {\n        threshold: buildThresholdList(),\n    };\n    // 実行するよ\n    const observer = new IntersectionObserver(showElements, options);\n    // p に到達したら発動\n    observer.observe(p);\n};\nscript();\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/scrollGradient.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/pages/scrollGradient.ts"]();
/******/ 	
/******/ })()
;