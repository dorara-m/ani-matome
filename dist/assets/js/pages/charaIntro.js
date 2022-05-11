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

/***/ "./src/js/assets/js/pages/charaIntro.ts":
/*!**********************************************!*\
  !*** ./src/js/assets/js/pages/charaIntro.ts ***!
  \**********************************************/
/***/ (function() {

eval("\nconst charaIntro = () => {\n    // 発火する処理（先に書いておかないと読めない場合あり\n    const doWhenIntersect = (entries) => {\n        entries.forEach((entry) => {\n            if (entry.isIntersecting) {\n                // ここでセリフをセクションごとに対応したものに変えれば良い。\n                // 書くセクションにセットしておいたセリフを呼び出し\n                console.log(entry.target.getAttribute('data-ballon'));\n                const animeDom = document.querySelector('.fixedAnime');\n                const ballonDom = document.getElementById('chara-ballon');\n                if (!ballonDom || !animeDom)\n                    return;\n                const text = entry.target.getAttribute('data-ballon');\n                // セリフ区間を終えるための要素をトリガー対象に含めておき、その要素に入ったら要素を隠すように\n                if (text === 'end') {\n                    animeDom.classList.add('-hide');\n                }\n                else {\n                    animeDom.classList.remove('-hide');\n                    ballonDom.innerHTML = text;\n                }\n            }\n        });\n    };\n    // observerオブジェクトを新規。第一引数にインタラクトしたときに実行したい関数をおく\n    const observer = new IntersectionObserver(doWhenIntersect, {\n        rootMargin: '-50% 0px',\n    });\n    // トリガーになるdomを指定\n    // ここで複数指定する\n    const sections = document.querySelectorAll('[section-box]');\n    // トリガーdomが画面内に入るごとに発火する\n    // 複数なのでforEachでそれぞれオブジェクト作成\n    sections.forEach((section) => {\n        observer.observe(section);\n    });\n};\ncharaIntro();\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/pages/charaIntro.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/assets/js/pages/charaIntro.ts"]();
/******/ 	
/******/ })()
;