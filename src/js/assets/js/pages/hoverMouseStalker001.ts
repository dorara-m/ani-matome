// 変数
const mouseStalker = document.querySelector('#mouseStalker')
const mouseTargets = document.querySelectorAll('.mouseStalkerTarget')
const mouseStalkerArea = document.querySelector('#mouseStalkerArea')

// マウスストーカー
if (mouseStalker instanceof HTMLDivElement) {
  // マウスストーカーのサイズなどを取得
  const stkrSize = parseInt(window.getComputedStyle(mouseStalker).width)
  const stkrPosX = parseInt(window.getComputedStyle(mouseStalker).left)
  const stkrPosY = parseInt(window.getComputedStyle(mouseStalker).top)
  let cssPosAjust = stkrPosX + stkrSize / 2
  let scale = 1
  let color = 'rgba(0, 0, 0, 0.5)'

  // マウスストーカーの追従処理
  document.addEventListener('mousemove', function (e) {
    const x = e.clientX
    const y = e.clientY
    mouseStalker.style.transform =
      'translate(' +
      (x - cssPosAjust) +
      'px, ' +
      (y - cssPosAjust) +
      'px) scale(' +
      scale +
      ')'
  })

  // マウスストーカーがリンクに重なったときの処理
  // 複数あるのでforEachで回す
  mouseTargets.forEach(function (target) {
    // マウスが要素に重なったとき
    target.addEventListener('mouseover', function (e) {
      scale = 2.5
      color = 'rgba(88, 81, 236, 0.3)'
      cssPosAjust = parseInt(window.getComputedStyle(mouseStalker).width) / 2
      const mouseEvent = e as MouseEvent
      let x = mouseEvent.clientX - cssPosAjust
      let y = mouseEvent.clientY - cssPosAjust

      mouseStalker.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
      mouseStalker.style.backgroundColor = color
    })

    target.addEventListener('mouseout', function (e) {
      // マウスが要素から離れたとき
      const mouseEvent = e as MouseEvent
      let x = mouseEvent.clientX - cssPosAjust
      let y = mouseEvent.clientY - cssPosAjust
      scale = 1
      color = 'rgba(0, 0, 0, 0.5)'
      mouseStalker.style.transform = `translate(${x}px, ${y}px) scale(${scale})`
      mouseStalker.style.backgroundColor = color
    })
  })
}
