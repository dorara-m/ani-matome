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

const wrapDom = document.getElementById('js-note-wrap')
const overlayDom = document.getElementById('js-note-overlay')
overlayDom.addEventListener('click', function(){
  wrapDom.classList.add('none')
})
document.getElementById('js-note-ballon').addEventListener('click', function(){
  wrapDom.classList.remove('none')
})

//pages
$('#js-reload').on('click', function () {
  location.reload()
})
