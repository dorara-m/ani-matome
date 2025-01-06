import Confetti from 'canvas-confetti'

// 普通ver.
const button01 = document.getElementById('canvas-confetti-button01')
if (button01) {
  button01.addEventListener('click', () => {
    Confetti({
      origin: { y: 0.7 }, // どの位置から confetti を出すか
      // particleCount: 100, // Confettiの数
      // spread: 70, // 広がり
    })
  })
}

// 派手ver.
const button02 = document.getElementById('canvas-confetti-button02')
if (button02) {
  button02.addEventListener('click', () => {
    Confetti({
      origin: { y: 0.7 }, // どの位置から confetti を出すか
      // パーティクルの数（デフォルト50)
      particleCount: 230,
      // 発射範囲(デフォルト45度)
      spread: 130,
      // default:0 数値を上げると横に流れる
      drift: 0,
      // confettiが動く長さ (default: 200)
      ticks: 100,
      // z-indexを指定(default:100)
      zIndex: 100,
    })
  })
}

// 色変更ver.
const button03 = document.getElementById('canvas-confetti-button03')
if (button03) {
  button03.addEventListener('click', () => {
    Confetti({
      origin: { y: 0.7 }, // どの位置から confetti を出すか
      particleCount: 100, // Confettiの数
      spread: 70, // 広がり
      // 紙吹雪の色を指定。配列でいくつも指定できる
      colors: ['#165B33', '#BB2528', '#146B3A', '#EA4630'],
    })
  })
}

// 花火ver.
// const button04 = document.getElementById('canvas-confetti-button04')

// const firework = () => {
//   var duration = 15 * 1000
//   var animationEnd = Date.now() + duration
//   var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

//   function randomInRange(min, max) {
//     return Math.random() * (max - min) + min
//   }

//   var interval = setInterval(function () {
//     var timeLeft = animationEnd - Date.now()

//     if (timeLeft <= 0) {
//       return clearInterval(interval)
//     }

//     var particleCount = 50 * (timeLeft / duration)
//     // since particles fall down, start a bit higher than random
//     Confetti({
//       ...defaults,
//       particleCount,
//       origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
//     })
//     Confetti({
//       ...defaults,
//       particleCount,
//       origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
//     })
//   }, 250)
// }

// if (button04) {
//   button04.addEventListener('click', () => {
//     firework()
//   })
// }
