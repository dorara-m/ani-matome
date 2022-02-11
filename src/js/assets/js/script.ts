import { hello } from '../../_module/_hello'

// hello('Hello World')

//top
let tabs = $('#js-tab li')
tabs.on('click', function () {
  $('.active').removeClass('active')
  $(this).addClass('active')
  const index = tabs.index(this)
  $('#js-cnt > li').eq(index).addClass('active')
})

//top - releaseNote
const wrapDom = document.getElementById('js-note-wrap')
const overlayDom = document.getElementById('js-note-overlay')
const ballonDom =  document.getElementById('js-note-ballon')
if (overlayDom && wrapDom) {
  overlayDom.addEventListener('click', function(){
    wrapDom.classList.add('none')
  })
  if (ballonDom) {
    ballonDom.addEventListener('click', function(){
      wrapDom.classList.remove('none')
    })
  }
}

const listDom = document.getElementById('js-note-list') || null
const pageDom = document.getElementById('js-note-page') || null
const backDom = document.getElementById('js-note-back') || null
const listItemsDom = document.getElementsByClassName('js-note-item')
for(let i = 0; i < listItemsDom.length; i++) {
  listItemsDom[i].addEventListener('click', function(){
    listDom.classList.add('slideOut')
    pageDom.classList.add('slideIn')
    returnChat(i)
  })
}

backDom.addEventListener('click', function(){
  listDom.classList.remove('slideOut')
  pageDom.classList.remove('slideIn')
})

const returnChat = (listNum:any) => {
  const uma = {
    "oguri": "オグリキャップ",
    "tama": "タマモクロス"
  }
  const json = require('./releaseNote.json')
  const notes = json.releaseNote[listNum]

  let html = ''
  notes.forEach((note:any) => {
    html += '<li>'
    html += '<div class="icon">'
    html += `<img src="/assets/img/${note.who}.jpg", alt="${uma[note.who]}">`
    html += '</div>'
    html += '<div class="left">'
    html += `<div class="name">${uma[note.who]}</div>`
    if (note.says) {
      html += `<div class="says">${note.says}</div>`
    } else {
      html += `<div class="saysImage"><img src="/assets/img/${note.image}", alt=""></div>`
    }
    html += '</div>'
    html += '</li>'
  });
  document.getElementById("js-note-chat").innerHTML = html
}
//pages
$('#js-reload').on('click', function () {
  location.reload()
})
