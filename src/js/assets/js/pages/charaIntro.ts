const charaIntro = () => {
  // 発火する処理（先に書いておかないと読めない場合あり
  const doWhenIntersect = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        // ここでセリフをセクションごとに対応したものに変えれば良い。
        // 書くセクションにセットしておいたセリフを呼び出し
        console.log(entry.target.getAttribute('data-ballon'))
        const animeDom = document.querySelector('.fixedAnime')
        const ballonDom = document.getElementById('chara-ballon')
        if (!ballonDom || !animeDom) return

        const text = entry.target.getAttribute('data-ballon')
        // セリフ区間を終えるための要素をトリガー対象に含めておき、その要素に入ったら要素を隠すように
        if (text === 'end') {
          animeDom.classList.add('-hide')
        } else {
          animeDom.classList.remove('-hide')
          ballonDom.innerHTML = text
        }
      }
    })
  }

  // observerオブジェクトを新規。第一引数にインタラクトしたときに実行したい関数をおく
  const observer = new IntersectionObserver(doWhenIntersect, {
    rootMargin: '-50% 0px',
  })
  // トリガーになるdomを指定
  // ここで複数指定する
  const sections = document.querySelectorAll('[section-box]')
  // トリガーdomが画面内に入るごとに発火する
  // 複数なのでforEachでそれぞれオブジェクト作成
  sections.forEach((section) => {
    observer.observe(section)
  })
}

charaIntro()
