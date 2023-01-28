import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const blockAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrap",
    start: 'top 100%',
    end: 'bottom 20%',
    scrub: true,
    markers: true,
  }
})
blockAnimation.fromTo(".block1", { width: '50vw' }, { width: "70vw" });
blockAnimation.fromTo(".block2", { width: '35vw' }, { width: "55vw" },"<");
blockAnimation.fromTo(".text", { x: '25vw' }, { x: "35vw" },"<");
blockAnimation.fromTo(".block3", { width: '20vw' }, { width: "30vw" },"<");
blockAnimation.fromTo(".block4", { width: '40vw' }, { width: "60vw" },"<");
