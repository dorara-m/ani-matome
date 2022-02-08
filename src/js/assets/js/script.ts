import { hello } from '../../_module/_hello'

hello('Hello World')

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

const listDom = document.getElementById('js-note-list')
const pageDom = document.getElementById('js-note-page')
const backDom = document.getElementById('js-note-back')
document.getElementsByClassName('js-note-item')[0].addEventListener('click', function(){
  if (listDom && pageDom) {
    listDom.classList.add('slideOut')
    pageDom.classList.add('slideIn')
    if (backDom) {
      backDom.addEventListener('click', function(){
        listDom.classList.remove('slideOut')
        pageDom.classList.remove('slideIn')
      })
    }
  }
})

//pages
$('#js-reload').on('click', function () {
  location.reload()
})
