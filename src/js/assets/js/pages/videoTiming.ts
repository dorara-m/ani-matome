const animeDom = document.getElementById("anime")

// 仮処理
// 3秒後に青くする
// @todo 動画の再生をキャッチしてから起動する。
const tmp = () => {
  setTimeout(()=>{
    animeDom.classList.add('active')
  }, 3000)
}
// どうが再生スタートしたら
tmp()


// ↓現在の秒数を表示するための関数。
let sec = 0
let intervalID: any

const fire = () => {
  sec += 1000
  animeDom.innerHTML = formatSec(sec)
  console.log(sec)
}

const formatSec = (sec: number) => {
  const thousand = sec / 1000
  return '0:' + String(thousand).padStart(2, '0');
}

// 毎秒の処理
// ここでも動画再生してからカウントはじめる。
if (!intervalID) {
  intervalID = setInterval(fire, 1000)
}

// 無限に動き続けるため、30秒で止まるように書いておく。
// 止めるためにintervalIDを設定しておく必要あり。
setTimeout(()=>{
  clearInterval(intervalID)
  intervalID = null
}, 30000)
