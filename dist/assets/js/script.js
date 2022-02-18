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

eval("__webpack_require__.r(__webpack_exports__);\n// hello('Hello World')\n//共通要素 - releaseNote\n// 未読フラグ機能\n// 未読フラグデータが入ってくる用の配列\nlet releaseNoteFlags;\n// まず未読フラグがストレージにないかチェック\nconst checkLocalStorage = () => {\n    const readFlag = localStorage.getItem('readFlag');\n    if (!readFlag) {\n        // なしなら全部未読をストレージに追加する\n        // チャット総数を取得\n        const json = __webpack_require__(/*! ./releaseNote.json */ \"./src/js/assets/js/releaseNote.json\");\n        const releaseNoteLength = json.releaseNote.length;\n        let flags = [], i = 0;\n        while (i < releaseNoteLength) {\n            flags.push(false);\n            i++;\n        }\n        localStorage.setItem('readFlag', JSON.stringify(flags));\n        console.log(flags);\n    }\n    else {\n        // ありならそのデータをパースして変数に格納、あとで使う。\n        releaseNoteFlags = JSON.parse(readFlag);\n    }\n};\n// 未読フラグを画面下バルーンに反映\nconst ballonIsRead = () => {\n    const ballonDom = document.getElementById('js-note-ballon');\n    if (releaseNoteFlags.indexOf(false) !== -1) {\n        ballonDom.classList.add('unRead');\n    }\n    else {\n        ballonDom.classList.remove('unRead');\n    }\n};\ncheckLocalStorage();\nballonIsRead();\n// チャット画面モーダルのon/off\nconst wrapDom = document.getElementById('js-note-wrap');\nconst ballonDom = document.getElementById('js-note-ballon');\nconst closeNoteDoms = document.getElementsByClassName('js-note-close');\nfor (let i = 0; i < closeNoteDoms.length; i++) {\n    closeNoteDoms[i].addEventListener('click', function () {\n        wrapDom.classList.remove('-js-active');\n    });\n}\nif (ballonDom) {\n    ballonDom.addEventListener('click', function () {\n        wrapDom.classList.add('-js-active');\n    });\n}\n// チャット一覧の内容描画\nconst listContentDom = document.getElementById('js-note-listContent') || null;\nconst removeBr = (str) => {\n    if (str.indexOf('<br>') == -1) {\n        return str;\n    }\n    const replaced = str.replace('<br>', '');\n    return replaced;\n};\nconst trimString = (str, max_length) => {\n    if (str.length <= max_length) {\n        return str;\n    }\n    let trimedStr = str.substr(0, max_length) + '…';\n    return trimedStr;\n};\nfunction makeListHTML() {\n    const json = __webpack_require__(/*! ./releaseNote.json */ \"./src/js/assets/js/releaseNote.json\");\n    const list = json.releaseNote;\n    let html = '<ul>';\n    for (let i = 0; i < list.length; i++) {\n        html += `<li class=\"js-note-item\">\n    <div class=\"icon\">\n    <img src=\"/assets/img/${list[i].chats[list[i].chats.length - 1].who}.jpg\" alt=\"\" />\n    </div>\n    <div class=\"text\">\n    <div class=\"head\">${list[i].date}</div>\n    <p>${trimString(removeBr(list[i].chats[list[i].chats.length - 1].says), 13)}</p>\n    </div>\n    <div class=\"count js-count ${releaseNoteFlags[i] ? '' : 'unRead'}\">${list[i].chats.length}</div>\n    </li>`;\n    }\n    html += '</ul>';\n    listContentDom.innerHTML = html;\n}\nmakeListHTML();\n// チャット一覧-詳細の移動\nconst listDom = document.getElementById('js-note-list') || null;\nconst pageDom = document.getElementById('js-note-page') || null;\nconst backDom = document.getElementById('js-note-back') || null;\nconst listItemsDom = document.getElementsByClassName('js-note-item');\nfor (let i = 0; i < listItemsDom.length; i++) {\n    listItemsDom[i].addEventListener('click', function () {\n        listDom.classList.add('slideOut');\n        pageDom.classList.add('slideIn');\n        // ここでスクロールリセット\n        pageDom.scrollTo(0, 0);\n        makeBallons(i);\n        // ここでフラグを切り替える\n        if (!releaseNoteFlags[i]) {\n            releaseNoteFlags[i] = true;\n            // フラグの切り替えを生成済みのhtmlに反映する\n            // バルーン\n            ballonIsRead();\n            // リスト\n            const countDoms = document.getElementsByClassName('js-count');\n            for (let i = 0; i < countDoms.length; i++) {\n                if (releaseNoteFlags[i]) {\n                    countDoms[i].classList.remove('unRead');\n                }\n            }\n            // localStrageにも反映しとく\n            localStorage.setItem('readFlag', JSON.stringify(releaseNoteFlags));\n        }\n    });\n}\nbackDom.addEventListener('click', function () {\n    listDom.classList.remove('slideOut');\n    pageDom.classList.remove('slideIn');\n});\nconst makeBallons = (listNum) => {\n    const uma = {\n        \"oguri\": \"オグリキャップ\",\n        \"tama\": \"タマモクロス\"\n    };\n    const json = __webpack_require__(/*! ./releaseNote.json */ \"./src/js/assets/js/releaseNote.json\");\n    const numberOfUma = json.releaseNote[listNum].person;\n    document.getElementById(\"js-note-number\").innerHTML = numberOfUma;\n    const notes = json.releaseNote[listNum].chats;\n    let html = '';\n    notes.forEach((note) => {\n        html += `<li>\n    <div class=\"icon\">\n    <img src=\"/assets/img/${note.who}.jpg\", alt=\"${uma[note.who]}\">\n    </div>\n    <div class=\"left\">\n    <div class=\"name\">${uma[note.who]}</div>`;\n        if (note.says) {\n            html += `<div class=\"says\">${note.says}</div>`;\n        }\n        else {\n            html += `<div class=\"saysImage\"><img src=\"/assets/img/${note.image}\", alt=\"\"></div>`;\n        }\n        html += `</div></li>`;\n    });\n    document.getElementById(\"js-note-chat\").innerHTML = html;\n};\n//pages\n$('#js-reload').on('click', function () {\n    location.reload();\n});\n\n\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/script.ts?");

/***/ }),

/***/ "./src/js/assets/js/releaseNote.json":
/*!*******************************************!*\
  !*** ./src/js/assets/js/releaseNote.json ***!
  \*******************************************/
/***/ (function(module) {

eval("module.exports = JSON.parse('{\"releaseNote\":[{\"date\":\"2022.2.16\",\"person\":\"3\",\"chats\":[{\"who\":\"tama\",\"says\":\"先週は世話になったな、オグリ\"},{\"who\":\"oguri\",\"says\":\"む。なんのことだ？\"},{\"who\":\"tama\",\"says\":\"いや、週末でウチが留守んとき、一人で更新対応してくれてたやん\"},{\"who\":\"oguri\",\"says\":\"あぁ、そのことか。<br>問題ない。<br>頑張ったのはトレーナーだしな。\"},{\"who\":\"tama\",\"says\":\"そのトレーナーがな、<br>またごっつええ感じの更新してくれてん\"},{\"who\":\"tama\",\"says\":\"オグリ、イージングってしっとるか？\"},{\"who\":\"oguri\",\"says\":\"レースで負けてしまったときに、たまに聞こえてくる、あれか？<br>あれは良くない。とても悲しくなるんだ。\"},{\"who\":\"tama\",\"says\":\"アホ！そらブーイングや！\"},{\"who\":\"tama\",\"says\":\"イージングっちゅのはな、CSSアニメーションの速度っちゅうか、変化タイミングを指定できるもんなんや\"},{\"who\":\"tama\",\"says\":\"これ見てみ\"},{\"who\":\"tama\",\"image\":\"easing.gif\"},{\"who\":\"oguri\",\"says\":\"ほんとうだ。速さが違うな。\"},{\"who\":\"tama\",\"says\":\"せや、イージングにはいろんな種類があってな<br>それを目で見て比較できるようにしたんが、今回の更新や\"},{\"who\":\"tama\",\"says\":\"アニメーションは実装してみないと速度感が掴めへんことも多いし、こうやって見た目で一覧を作っておくと今後デザイナーさんとかに共有しやすいと思ったんやろな。\"},{\"who\":\"oguri\",\"says\":\"つまりご飯の量を<br>毎食同じで食べるか、<br>朝は少なめで夜たくさん食べるか、<br>朝多めで夜を少なくするか、<br>みたいな違いか。\"},{\"who\":\"tama\",\"says\":\"せ、せやな。確かにそういう例えも出来なくはないな\"},{\"who\":\"oguri\",\"says\":\"安心してくれ、タマ。\"},{\"who\":\"oguri\",\"says\":\"私はどんな食べ方も大好きだ。<br>トレセン学園のご飯は美味しいからな。\"},{\"who\":\"tama\",\"says\":\"いやいや聞いてへんわ！なんでいっつも飯の話になんねん！！\"},{\"who\":\"oguri\",\"says\":\"（ぐぅぅぅ…）\"},{\"who\":\"tama\",\"says\":\"ちょ、トレーナー！ほんまウチだけやとオグリのボケにツッコミの手が足らんわ！\"},{\"who\":\"tama\",\"says\":\"はよ誰か、チャットに入ってもらわんと困るさかい、手配頼むで！！\"}]},{\"date\":\"2022.2.12\",\"person\":\"3\",\"chats\":[{\"who\":\"oguri\",\"says\":\"聞いてくれ、タマ\"},{\"who\":\"oguri\",\"says\":\"トレーナーが休日だというのにサイトを更新してくれたぞ。\"},{\"who\":\"oguri\",\"says\":\"私達のこのチャットに、一覧画面ができたんだ。\"},{\"who\":\"oguri\",\"image\":\"uma01.gif\"},{\"who\":\"oguri\",\"says\":\"するする動いて、これは楽しいな。\"},{\"who\":\"oguri\",\"says\":\"まるでLINEみたいだ。\"},{\"who\":\"oguri\",\"says\":\"あれ、タマ？\"},{\"who\":\"oguri\",\"says\":\"思い出した。<br>今日は妹たちと遊ぶ約束があるから実家に戻ると言っていたな。\"},{\"who\":\"oguri\",\"says\":\"タマは家族思いだからな<br>そういうところも私は好きだ。\"},{\"who\":\"oguri\",\"says\":\"私も地元の笠松にたまには帰りたいな。みんな、元気だろうか。\"},{\"who\":\"oguri\",\"says\":\"お、そろそろトレーニングの時間か。\"},{\"who\":\"oguri\",\"says\":\"ではトレーナー、先に行っている。\"}]},{\"date\":\"2022.2.4\",\"person\":\"3\",\"chats\":[{\"who\":\"oguri\",\"says\":\"やぁタマ。今回は何が更新されたんだ？\"},{\"who\":\"tama\",\"says\":\"よぉ聞いてくれたなぁ、オグリ\"},{\"who\":\"tama\",\"says\":\"今回はなんと、Twitterのいいね♡のアニメーションが追加されたんや！\"},{\"who\":\"tama\",\"image\":\"iine.gif\"},{\"who\":\"oguri\",\"says\":\"おぉ。なんだか可愛いな！\"},{\"who\":\"tama\",\"says\":\"せやろ。<br>なんやトレーナーもえらいテンション高く組んだみたいで、自信作いうとったわ！\"},{\"who\":\"oguri\",\"says\":\"………（ジュル\"},{\"who\":\"tama\",\"says\":\"ん？オグリ？\"},{\"who\":\"oguri\",\"says\":\"いや、なんだかこのアニメ見ていたらお腹が空いてきたんだ。<br>食べ物じゃないのに、不思議だ。\"},{\"who\":\"tama\",\"says\":\"あぁ！確かに赤色は食欲をそそる色いうもんな\"},{\"who\":\"tama\",\"says\":\"居酒屋の提灯とか赤いんはそれを意識してるって話、聞いたことあるわ\"},{\"who\":\"oguri\",\"says\":\"よし…！今から食堂に行こう、タマ。\"},{\"who\":\"oguri\",\"says\":\"まずはご飯、10杯だ！\"},{\"who\":\"tama\",\"says\":\"なんでやねん！<br>朝食の量としておかしいわ！！朝からどんだけ食うねん！\"}]}]}');\n\n//# sourceURL=webpack://animatome/./src/js/assets/js/releaseNote.json?");

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