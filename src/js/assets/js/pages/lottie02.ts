var params = {
  container: document.getElementById('lottie'),
  // アニメーションをsvg形式で出力
  renderer: 'svg',
  // アニメーションをループする
  loop: true,
  // アニメーションを読み込んだら自動で再生する
  autoplay: true,
  // アニメーションファイル(.json)のパス
  path: "../assets/json/13_lottie02.json"
};

// アニメーションをロード
var anim = lottie.loadAnimation(params);
