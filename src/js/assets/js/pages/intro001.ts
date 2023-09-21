const btn = document.querySelector('.js-intro001-toggle')
const target = document.querySelector('.intro001-bg')
if (target && btn) {
  btn.addEventListener('click', () => {
    target.classList.toggle('is-active')
  })
}
