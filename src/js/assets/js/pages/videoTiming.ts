
// 処理
const script = () => {
  const animeDom = document.getElementById("anime")
  const videoDom = document.getElementById("video")

  if (!animeDom || !videoDom) return

  const videoTimeDom = document.querySelectorAll(".videoTime")[0]

  // 起動したいタイミング指定
  // @todo 数字で指定できると楽。
  const array = ['0:04', '0:08', '0:13', '0:17', '0:22', '0:26']

  videoDom.addEventListener('timeupdate', () => {
    // @todo 現状だと処理が動きすぎる感もあり…どこかで絞りたい
    if (videoDom.currentTime !== 0) {
      console.log(videoDom.currentTime)

      videoTimeDom.innerHTML = timeConvert(videoDom.currentTime)

      // 特定の秒数のときアニメ起動。
      if (array.includes(timeConvert(videoDom.currentTime))) {
        animeDom?.classList.add('active')
      } else {
        animeDom?.classList.remove('active')
      }
    } else {
      videoTimeDom.innerHTML = '0:00'
      // console.log('0:00')
    }
  })
}
//数値型から”00：00”表記への変換（秒、ミリ秒の場合）
const timeConvert = (time: number) => {
  // 小数点切り上げ
  // 0:をくっつける(仮)
  return '0:' + String(Math.ceil(time)).padStart(2, '0')
}

script()
