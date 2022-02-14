import { hello } from '../../_module/_hello'

// hello('Hello World')


//top - releaseNote
// チャット画面モーダルのon/off
const wrapDom = document.getElementById('js-note-wrap')
const ballonDom =  document.getElementById('js-note-ballon')
const closeNoteDoms = document.getElementsByClassName('js-note-close')
for (let i=0; i<closeNoteDoms.length; i++) {
  closeNoteDoms[i].addEventListener('click', function(){
    wrapDom.classList.remove('-js-active')
  })
}

if (ballonDom) {
  ballonDom.addEventListener('click', function(){
    wrapDom.classList.add('-js-active')
  })
}

// チャット一覧の内容描画
const listContentDom = document.getElementById('js-note-listContent') || null

const removeBr = (str: string) => {
  if (str.indexOf('<br>') == -1) {
    return str
  }
  const replaced = str.replace('<br>', '')
  return replaced
}
const trimString = (str: string, max_length: number) => {
  if (str.length <= max_length) {
    return str
  }
  let trimedStr = str.substr(0, max_length) + '…'
  return trimedStr
}
function makeListHTML() {
  const json = require('./releaseNote.json')
  const list = json.releaseNote
  let html = '<ul>'
  list.forEach((item:any) => {
    html += `<li class="js-note-item">
    <div class="icon">
    <img src="/assets/img/${item.chats[item.chats.length - 1].who}.jpg" alt="" />
    </div>
    <div class="text">
    <div class="head">${item.date}</div>
    <p>${trimString(removeBr(item.chats[item.chats.length - 1].says), 13)}</p>
    </div>
    <div class="count unread">${item.chats.length}</div>
    </li>`
  })
  html += '</ul>'
  listContentDom.innerHTML = html
}
makeListHTML()


// チャット一覧-詳細の移動
const listDom = document.getElementById('js-note-list') || null
const pageDom = document.getElementById('js-note-page') || null
const backDom = document.getElementById('js-note-back') || null
const listItemsDom = document.getElementsByClassName('js-note-item')
for(let i = 0; i < listItemsDom.length; i++) {
  listItemsDom[i].addEventListener('click', function(){
    listDom.classList.add('slideOut')
    pageDom.classList.add('slideIn')
    // ここでスクロールリセット
    pageDom.scrollTo(0, 0)
    makeBallons(i)
  })
}

backDom.addEventListener('click', function(){
  listDom.classList.remove('slideOut')
  pageDom.classList.remove('slideIn')
})

const makeBallons = (listNum:any) => {
  const uma = {
    "oguri": "オグリキャップ",
    "tama": "タマモクロス"
  }
  const json = require('./releaseNote.json')
  const numberOfUma = json.releaseNote[listNum].person
  document.getElementById("js-note-number").innerHTML = numberOfUma

  const notes = json.releaseNote[listNum].chats

  let html = ''
  notes.forEach((note:any) => {
    html += `<li>
    <div class="icon">
    <img src="/assets/img/${note.who}.jpg", alt="${uma[note.who]}">
    </div>
    <div class="left">
    <div class="name">${uma[note.who]}</div>`
    if (note.says) {
      html += `<div class="says">${note.says}</div>`
    } else {
      html += `<div class="saysImage"><img src="/assets/img/${note.image}", alt=""></div>`
    }
    html += `</div></li>`
  });
  document.getElementById("js-note-chat").innerHTML = html
}


//pages
$('#js-reload').on('click', function () {
  location.reload()
})
