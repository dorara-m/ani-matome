const p = document.getElementById("paragraph");

const options = {
  threshold: buildThresholdList(),
};

// 実行するよ
const observer = new IntersectionObserver(showElements, options)

// p に到達したら発動
observer.observe(p)

// threshold の設定
function buildThresholdList() {
  let thresholds = []
  let numSteps = 20

  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps
    thresholds.push(ratio)
  }
  console.log(thresholds)
  return thresholds
}

// 要素が表示されたら実行する動作
function showElements(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let ratio = Math.round(entry.intersectionRatio * 100)
      const ratioDom = document.getElementById("ratio")
      ratioDom.innerHTML = `※グラデーション変化量: ${ratio}`

      const heading = document.getElementById("heading")
      heading.style.backgroundImage = `
        linear-gradient(
        45deg,
        rgb(37, 47, 255) ${0 - ratio}%,
        rgb(124, 192, 226) ${100 - ratio}%,
        rgb(37, 47, 255) ${200 - ratio}%
      )`
    }
  });
}