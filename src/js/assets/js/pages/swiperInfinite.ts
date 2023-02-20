import Swiper from 'swiper'
import SwiperCore, { Autoplay } from 'swiper'
SwiperCore.use([Autoplay])

const swiper = new Swiper('.swiper', {
  loop: true,
  loopedSlides: 2,
  slidesPerView: 'auto',
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
})
