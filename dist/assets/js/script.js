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

eval("__webpack_require__.r(__webpack_exports__);\n// hello('Hello World')\n//top - releaseNote\n// チャット画面モーダルのon/off\nconst wrapDom = document.getElementById('js-note-wrap');\nconst ballonDom = document.getElementById('js-note-ballon');\nconst closeNoteDoms = document.getElementsByClassName('js-note-close');\nfor (let i = 0; i < closeNoteDoms.length; i++) {\n    closeNoteDoms[i].addEventListener('click', function () {\n        wrapDom.classList.remove('-js-active');\n    });\n}\nif (ballonDom) {\n    ballonDom.addEventListener('click', function () {\n        wrapDom.classList.add('-js-active');\n    });\n}\n// チャット一覧の内容描画\nconst listContentDom = document.getElementById('js-note-listContent') || null;\nconst removeBr = (str) => {\n    if (str.indexOf('<br>') == -1) {\n        return str;\n    }\n    const replaced = str.replace('<br>', '');\n    return replaced;\n};\nconst trimString = (str, max_length) => {\n    if (str.length <= max_length) {\n        return str;\n    }\n    let trimedStr = str.substr(0, max_length) + '…';\n    return trimedStr;\n};\nfunction makeListHTML() {\n    const json = __webpack_require__(/*! ./releaseNote.json */ \"./src/js/assets/js/releaseNote.json\");\n    const list = json.releaseNote;\n    let html = '<ul>';\n    list.forEach((item) => {\n        html += `<li class=\"js-note-item\">\n    <div class=\"icon\">\n    <img src=\"/assets/img/${item.chats[item.chats.length - 1].who}.jpg\" alt=\"\" />\n    </div>\n    <div class=\"text\">\n    <div class=\"head\">${item.date}</div>\n    <p>${trimString(removeBr(item.chats[item.chats.length - 1].says), 13)}</p>\n    </div>\n    <div class=\"count unread\">${item.chats.length}</div>\n    </li>`;\n    });\n    html += '</ul>';\n    listContentDom.innerHTML = html;\n}\nmakeListHTML();\n// チャット一覧-詳細の移動\nconst listDom = document.getElementById('js-note-list') || null;\nconst pageDom = document.getElementById('js-note-page') || null;\nconst backDom = document.getElementById('js-note-back') || null;\nconst listItemsDom = document.getElementsByClassName('js-note-item');\nfor (let i = 0; i < listItemsDom.length; i++) {\n    listItemsDom[i].addEventListener('click', function () {\n        listDom.classList.add('slideOut');\n        pageDom.classList.add('slideIn');\n        // ここでスクロールリセット\n        pageDom.scrollTo(0, 0);\n        makeBallons(i);\n    });\n}\nbackDom.addEventListener('click', function () {\n    listDom.classList.remove('slideOut');\n    pageDom.classList.remove('slideIn');\n});\nconst makeBallons = (listNum) => {\n    const uma = {\n        \"oguri\": \"オグリキャップ\",\n        \"tama\": \"タマモクロス\"\n    };\n    const json = __webpack_require__(/*! ./releaseNote.json */ \"./src/js/assets/js/releaseNote.json\");\n    const numberOfUma = json.releaseNote[listNum].person;\n    document.getElementById(\"js-note-number\").innerHTML = numberOfUma;\n    const notes = json.releaseNote[listNum].chats;\n    let html = '';\n    notes.forEach((note) => {\n        html += `<li>\n    <div class=\"icon\">\n    <img src=\"/assets/img/${note.who}.jpg\", alt=\"${uma[note.who]}\">\n    </div>\n    <div class=\"left\">\n    <div class=\"name\">${uma[note.who]}</div>`;\n        if (note.says) {\n            html += `<div class=\"says\">${note.says}</div>`;\n        }\n        else {\n            html += `<div class=\"saysImage\"><img src=\"/assets/img/${note.image}\", alt=\"\"></div>`;\n        }\n        html += `</div></li>`;\n    });\n    document.getElementById(\"js-note-chat\").innerHTML = html;\n};\n//pages\n$('#js-reload').on('click', function () {\n    location.reload();\n});\n\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/script.ts?");

/***/ }),

/***/ "./src/js/assets/js/releaseNote.json":
/*!*******************************************!*\
  !*** ./src/js/assets/js/releaseNote.json ***!
  \*******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"releaseNote\":[{\"date\":\"2022.2.12\",\"person\":\"3\",\"chats\":[{\"who\":\"oguri\",\"says\":\"聞いてくれ、タマ\"},{\"who\":\"oguri\",\"says\":\"トレーナーが休日だというのにサイトを更新してくれたぞ。\"},{\"who\":\"oguri\",\"says\":\"私達のこのチャットに、一覧画面ができたんだ。\"},{\"who\":\"oguri\",\"image\":\"uma01.gif\"},{\"who\":\"oguri\",\"says\":\"するする動いて、これは楽しいな。\"},{\"who\":\"oguri\",\"says\":\"まるでLINEみたいだ。\"},{\"who\":\"oguri\",\"says\":\"あれ、タマ？\"},{\"who\":\"oguri\",\"says\":\"思い出した。<br>今日は妹たちと遊ぶ約束があるから実家に戻ると言っていたな。\"},{\"who\":\"oguri\",\"says\":\"タマは家族思いだからな<br>そういうところも私は好きだ。\"},{\"who\":\"oguri\",\"says\":\"私も地元の笠松にたまには帰りたいな。みんな、元気だろうか。\"},{\"who\":\"oguri\",\"says\":\"お、そろそろトレーニングの時間か。\"},{\"who\":\"oguri\",\"says\":\"ではトレーナー、先に行っている。\"}]},{\"date\":\"2022.2.4\",\"person\":\"3\",\"chats\":[{\"who\":\"oguri\",\"says\":\"やぁタマ。今回は何が更新されたんだ？\"},{\"who\":\"tama\",\"says\":\"よぉ聞いてくれたなぁ、オグリ。\"},{\"who\":\"tama\",\"says\":\"今回はなんと、Twitterのいいね♡のアニメーションが追加されたんや！\"},{\"who\":\"tama\",\"image\":\"iine.gif\"},{\"who\":\"oguri\",\"says\":\"おぉ。なんだか可愛いな！\"},{\"who\":\"tama\",\"says\":\"せやろ。<br>なんやトレーナーもえらいテンション高く組んだみたいで、自信作いうとったわ！\"},{\"who\":\"oguri\",\"says\":\"………（ジュル\"},{\"who\":\"tama\",\"says\":\"ん？オグリ？\"},{\"who\":\"oguri\",\"says\":\"いや、なんだかこのアニメ見ていたらお腹が空いてきたんだ。<br>食べ物じゃないのに、不思議だ。\"},{\"who\":\"tama\",\"says\":\"あぁ！確かに赤色は食欲をそそる色いうもんな。\"},{\"who\":\"tama\",\"says\":\"居酒屋の提灯とか赤いんはそれを意識してるって話、聞いたことあるわ。\"},{\"who\":\"oguri\",\"says\":\"よし…！今から食堂に行こう、タマ。\"},{\"who\":\"oguri\",\"says\":\"まずはご飯、10杯だ！\"},{\"who\":\"tama\",\"says\":\"なんでやねん！<br>朝食の量としておかしいわ！！朝からどんだけ食うねん！\"}]}]}');\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/releaseNote.json?");

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