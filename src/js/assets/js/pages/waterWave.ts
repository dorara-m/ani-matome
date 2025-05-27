// キャンバスの初期設定
const canvas = document.getElementById('canvas') as HTMLCanvasElement
const ctx = canvas.getContext('2d')!
const width = (canvas.width = canvas.offsetWidth)
const height = (canvas.height = canvas.offsetHeight)

// 波のパラメータ設定
// 第1の波
const A = 30 // 振幅
const W = 1 / 200 // 波長
let Q = 0 // 位相
const H = height / 2 // 中心位置

// 第2の波
const A2 = 30
const W2 = 1 / 300
const W3 = 1 / 500
let Q2 = 0
const H2 = height / 2
const H3 = height / 1.5

// 波の速度設定
const speed = -0.01
const speed2 = -0.02
const speed3 = 0.2

// グラデーションの設定
const lingrad = ctx.createLinearGradient(0, 0, 0, height)
lingrad.addColorStop(0, 'rgba(64, 156, 255, 0.8)')
lingrad.addColorStop(1, 'rgba(100, 181, 246, 1)')

// オレンジ系のグラデーション
const orangeGrad = ctx.createLinearGradient(0, 0, 0, height)
orangeGrad.addColorStop(0, 'rgba(255, 183, 77, 0.7)')
orangeGrad.addColorStop(1, 'rgba(255, 152, 0, 0.8)')

// アニメーション描画関数
function draw() {
  // アニメーションフレームの要求
  window.requestAnimationFrame(draw)

  // キャンバスのクリア
  ctx.clearRect(0, 0, width, height)

  // 第1の波の描画
  ctx.beginPath()
  ctx.strokeStyle = '#000'
  ctx.fillStyle = lingrad
  ctx.lineWidth = 1
  ctx.moveTo(0, height / 2)

  Q += speed
  for (let x = 0; x <= width; x++) {
    const y = A * Math.sin(W * x + Q) + H
    ctx.lineTo(x, y)
  }

  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.fill()
  ctx.closePath()

  // 第2の波の描画
  ctx.beginPath()
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 1
  ctx.fillStyle = orangeGrad

  Q2 += speed2
  for (let x = 0; x < width; x++) {
    const y = A2 * Math.sin(x * W2 + Q2) + H2
    ctx.lineTo(x, y)
  }

  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.fill()
  ctx.closePath()

  // 合成モードの設定
  ctx.globalCompositeOperation = 'destination-over'

  // 第3の波の描画
  // ctx.beginPath()
  // ctx.strokeStyle = '#000'
  // ctx.lineWidth = 1
  // ctx.fillStyle = 'rgba(255, 87, 34, 0.5)'

  // Q2 += 0.05
  // for (let x = 0; x < width; x++) {
  //   const y = A2 * Math.sin(x * W2 + Q2) + H
  //   ctx.lineTo(x, y)
  // }

  // ctx.lineTo(width, height)
  // ctx.lineTo(0, height)
  // ctx.fill()
  // ctx.closePath()
}

// アニメーションの開始
draw()
