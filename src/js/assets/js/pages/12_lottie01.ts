var params = {
  container: document.getElementById('lottie'),
  // アニメーションをsvg形式で出力
  renderer: 'svg',
  // アニメーションをループする
  loop: false,
  // アニメーションを読み込んだら自動で再生する
  autoplay: true,
  // アニメーションファイル(.json)のパス
  path: "../assets/json/12_lottie01.json"
};

// アニメーションをロード
var anim = lottie.loadAnimation(params);

// アニメーションが完了したら要素削除
anim.addEventListener('complete', () => {
  console.log('completed')
  document.getElementById('lottie').remove()
})
