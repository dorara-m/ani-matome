import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap
  .timeline({
    scrollTrigger: {
      trigger: '.target',
      start: 'top center',
      end: 'bottom center',
      toggleActions: 'play none none reset',
      markers: true,
      scrub: 0.8,
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
