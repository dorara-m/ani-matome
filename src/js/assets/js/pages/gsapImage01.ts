import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

console.log('hello gsap!')
gsap.registerPlugin(ScrollTrigger)
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.before',
      start: 'top top',
      end: 'bottom+=200px top',
      toggleActions: 'play none none reset',
      markers: true,
      scrub: true,
    },
  })
  .from('.targetImg', {
    scale: 0.8,
  })
  .to('.targetImg', {
    scale: 1,
  })
  .to('.targetImg', {
    scale: 1.1,
  })
