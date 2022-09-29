const likeSwipe = () => {
  const arrowDoms = document.getElementsByClassName('js-swipe')
  console.log(arrowDoms)
  for (let i = 0; i < arrowDoms.length; i++) {
    arrowDoms[i].addEventListener('click', () => {
      const targetDom = document.getElementById('js-swipe-wrap')
      targetDom?.classList.toggle('isSwipe')
    })
  }
}
likeSwipe()
