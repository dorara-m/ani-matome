console.log('hello scale center slider')

import Swiper, { Navigation } from 'swiper'
// いつかできるようにしたい↓いまはそれ専用の入力欄を増やして対応
// import 'swiper/css'

// ここで与えるクラス名はuniqueにすること、じゃないと動きが干渉して正常に動かない
const swiper = new Swiper('.swiper-container1', {
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
    // pcのスライド間隔
    768: {
      spaceBetween: 80,
    },
  },
})

const swiper2 = new Swiper('.swiper-container2', {
  modules: [Navigation],
  centeredSlides: true,
  loop: true,
  loopedSlides: 2,
  speed: 1000,
  slidesPerView: 1.8,
  spaceBetween: 67,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
})
