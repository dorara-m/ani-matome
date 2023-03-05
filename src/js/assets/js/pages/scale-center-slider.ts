console.log('hello scale center slider')

import Swiper, { Navigation } from 'swiper'
// いつかできるようにしたい↓いまはそれ専用の入力欄を増やして対応
// import 'swiper/css'

const swiper = new Swiper('.swiper-container', {
  modules: [Navigation],
  centeredSlides: true,
  loop: true,
  loopedSlides: 2,
  speed: 500,
  slidesPerView: 1.5,
  // スマホのときだけスライド間隔を小さく
  spaceBetween: 40,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // pcのサイズ
    768: {
      spaceBetween: 80,
    },
  },
})
