import lottie from 'lottie-web'

const animation = () => {
  const targetDom = document.getElementById('lottie')
  if (!targetDom) return

  // アニメーションをロード
  const anim = lottie.loadAnimation({
    container: targetDom,
    // アニメーションをsvg形式で出力
    renderer: 'svg',
    // アニメーションをループする
    loop: false,
    // アニメーションを読み込んだら自動で再生する
    autoplay: true,
    // アニメーションファイル(.json)のパス
    path: '../assets/json/12_lottie01.json',
  })
  // アニメーションが完了したら要素削除
  anim.addEventListener('complete', () => {
    console.log('completed')
    targetDom.remove()
  })
}
animation()
