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

/***/ "./src/js/assets/js/script.ts":
/*!************************************!*\
  !*** ./src/js/assets/js/script.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// hello('Hello World')\n//top\nlet tabs = $('#js-tab li');\ntabs.on('click', function () {\n    $('.active').removeClass('active');\n    $(this).addClass('active');\n    const index = tabs.index(this);\n    $('#js-cnt > li').eq(index).addClass('active');\n});\n//top - releaseNote\nconst wrapDom = document.getElementById('js-note-wrap');\nconst overlayDom = document.getElementById('js-note-overlay');\nconst ballonDom = document.getElementById('js-note-ballon');\nif (overlayDom && wrapDom) {\n    overlayDom.addEventListener('click', function () {\n        wrapDom.classList.add('none');\n    });\n    if (ballonDom) {\n        ballonDom.addEventListener('click', function () {\n            wrapDom.classList.remove('none');\n        });\n    }\n}\nconst listDom = document.getElementById('js-note-list') || null;\nconst pageDom = document.getElementById('js-note-page') || null;\nconst backDom = document.getElementById('js-note-back') || null;\nconst listItemsDom = document.getElementsByClassName('js-note-item');\nfor (let i = 0; i < listItemsDom.length; i++) {\n    listItemsDom[i].addEventListener('click', function () {\n        listDom.classList.add('slideOut');\n        pageDom.classList.add('slideIn');\n        returnChat(i);\n    });\n}\nbackDom.addEventListener('click', function () {\n    listDom.classList.remove('slideOut');\n    pageDom.classList.remove('slideIn');\n});\nconst returnChat = (listNum) => {\n    const uma = {\n        \"oguri\": \"オグリキャップ\",\n        \"tama\": \"タマモクロス\"\n    };\n    const json = __webpack_require__(/*! ./releaseNote.json */ \"./src/js/assets/js/releaseNote.json\");\n    const notes = json.releaseNote[listNum];\n    let html = '';\n    notes.forEach((note) => {\n        html += '<li>';\n        html += '<div class=\"icon\">';\n        html += `<img src=\"/assets/img/${note.who}.jpg\", alt=\"${uma[note.who]}\">`;\n        html += '</div>';\n        html += '<div class=\"left\">';\n        html += `<div class=\"name\">${uma[note.who]}</div>`;\n        if (note.says) {\n            html += `<div class=\"says\">${note.says}</div>`;\n        }\n        else {\n            html += `<div class=\"saysImage\"><img src=\"/assets/img/${note.image}\", alt=\"\"></div>`;\n        }\n        html += '</div>';\n        html += '</li>';\n    });\n    document.getElementById(\"js-note-chat\").innerHTML = html;\n};\n//pages\n$('#js-reload').on('click', function () {\n    location.reload();\n});\n\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/script.ts?");

/***/ }),

/***/ "./src/js/assets/js/releaseNote.json":
/*!*******************************************!*\
  !*** ./src/js/assets/js/releaseNote.json ***!
  \*******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"releaseNote\":[[{\"who\":\"oguri\",\"says\":\"やぁタマ。今回は何が更新されたんだ？\"},{\"who\":\"tama\",\"says\":\"よぉ聞いてくれたなぁ、オグリ。\"},{\"who\":\"tama\",\"says\":\"今回はなんと、Twitterのいいね♡のアニメーションが追加されたんや！\"},{\"who\":\"tama\",\"image\":\"iine.gif\"},{\"who\":\"oguri\",\"says\":\"おぉ。なんだか可愛いな！\"},{\"who\":\"tama\",\"says\":\"せやろ。<br>なんやトレーナーもえらいテンション高く組んだみたいで、自信作いうとったわ！\"},{\"who\":\"oguri\",\"says\":\"………（ジュル\"},{\"who\":\"tama\",\"says\":\"ん？オグリ？\"},{\"who\":\"oguri\",\"says\":\"いや、なんだかこのアニメ見ていたらお腹が空いてきたんだ。<br>食べ物じゃないのに、不思議だ。\"},{\"who\":\"tama\",\"says\":\"あぁ！確かに赤色は食欲をそそる色いうもんな。\"},{\"who\":\"tama\",\"says\":\"居酒屋の提灯とか赤いんはそれを意識してるって話、聞いたことあるわ。\"},{\"who\":\"oguri\",\"says\":\"よし…！今から食堂に行こう、タマ。\"},{\"who\":\"oguri\",\"says\":\"まずはご飯、10杯だ！\"},{\"who\":\"tama\",\"says\":\"なんでやねん！<br>朝食の量としておかしいわ！！朝からどんだけ食うねん！\"}],[{\"who\":\"oguri\",\"says\":\"試しに喋ってみるぞ\"},{\"who\":\"oguri\",\"says\":\"あーーーーーー<Br>いーーーー\"}]]}');\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/releaseNote.json?");

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