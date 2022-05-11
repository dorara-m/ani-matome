const mvToSection = () => {
  const doWhenIntersect = (entries: any) => {
    entries.forEach((entry: any) => {
      const mvDom = document.querySelector('.mv_fixed')
      const sectionDom = document.querySelector('.fixedAnime')
      if (!mvDom || !sectionDom) return
      if (entry.isIntersecting) {
        console.log('isIntersecting')
        mvDom.classList.add('-hide')
        sectionDom.classList.remove('-hide')
      } else {
        console.log('isNotIntersecting')
        mvDom.classList.remove('-hide')
        sectionDom.classList.add('-hide')
      }
    })
  }

  const observer = new IntersectionObserver(doWhenIntersect)
  const trigger = document.querySelector('.switchPoint')
  if (!trigger) return
  observer.observe(trigger)
}

mvToSection()
