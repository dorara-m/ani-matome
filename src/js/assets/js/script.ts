// 未読フラグデータが入ってくる用の配列
let releaseNoteFlags

// まず未読フラグがストレージにないかチェック
const checkLocalStorage = (data: any) => {
  const readFlag = localStorage.getItem('readFlag')
  if (!readFlag) {
    // なし(初回)なら全部未読の配列を作成
    let flags = [], i = 0
    while (i < data.length) {
      flags.push(false)
      i++
    }
    // ストレージにセット
    localStorage.setItem('readFlag', JSON.stringify(flags))
  } else {
    // ありならそのデータをパースして変数に格納。
    // 一時変数
    const tmpFlags = JSON.parse(readFlag)
    // もしこのフラグがjsonデータと一致しない場合…（つまりチャット数が増えていた場合
    if (tmpFlags.length < data.length) {
      // その差分だけ配列頭にfalseを足す
      for (let i=0; i < data.length - tmpFlags.length; i++) {
        tmpFlags.unshift(false)
      }
      // console.log(tmpFlags)
    }
    // 最終的な変数に突っ込む
    releaseNoteFlags = tmpFlags
  }
}

const toggleChat = () => {
  const wrapDom = document.getElementById('js-note-wrap')
  const toggleNoteDom = document.getElementById('js-note-toggle')

  if (!toggleNoteDom || !wrapDom) {
    return
  }
  toggleNoteDom.addEventListener('click', ()=> {
    wrapDom.classList.toggle('-js-active')
  })
}

const removeBr = (str: string) => {
  if (str.indexOf('<br>') == -1) {
    return str
  }
  const replaced = str.replace('<br>', '')
  return replaced
}

const trimString = (str: string, max_length: number) => {
  if (str.length <= max_length) {
    return str
  }
  let trimedStr = str.substring(0, max_length) + '…'
  return trimedStr
}

const formatDate = (date: string) => {
  const dt = new Date(date)
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const day = dt.getDate()
  return `${year}-${month}-${day}`
}

const makeListHTML = (data: any) => {
  const listContentDom = document.getElementById('js-note-listContent')
  if (!listContentDom) return

  const list = data
  let html = '<ul>'
  for(let i=0; i<list.length; i++) {
    html += `<li class="js-note-item">
    <div class="icon">
    <img src="/assets/img/${list[i].chats[0].who}.jpg" alt="" />
    </div>
    <div class="text">
    <div class="head">${formatDate(list[i].date)}</div>
    <p>${trimString(removeBr(list[i].chats[0].says), 13)}</p>
    </div>
    <div class="count js-count ${releaseNoteFlags[i] ? '' : 'unRead'}">${list[i].chats.length}</div>
    </li>`
  }
  html += '</ul>'
  listContentDom.innerHTML = html
}

const makeBallons = (listNum: any, data: any) => {
  const uma = {
    "oguri": "オグリキャップ",
    "tama": "タマモクロス",
    "chiyo": "サクラチヨノオー"
  }
  const numberOfUma = data[listNum].person
  document.getElementById("js-note-number").innerHTML = numberOfUma

  const notes = data[listNum].chats

  let html = ''
  notes.forEach((note:any) => {
    html += `<li>
    <div class="icon">
    <img src="/assets/img/${note.who}.jpg", alt="${uma[note.who]}">
    </div>
    <div class="left">
    <div class="name">${uma[note.who]}</div>`
    if (note.says) {
      html += `<div class="says">${note.says}</div>`
    } else {
      html += `<a href="${note.image.url}" class="saysImage"><img src="${note.image.url}", alt=""></a>`
    }
    html += `</div></li>`
  });
  document.getElementById("js-note-chat").innerHTML = html
}

const moveListToDetail = (data: any) => {
  const listDom = document.getElementById('js-note-list')
  const pageDom = document.getElementById('js-note-page')
  const backDom = document.getElementById('js-note-back')
  const listItemsDom = document.getElementsByClassName('js-note-item')

  if (!listDom || !pageDom || !backDom) {
    return false
  }
  
  // 一覧アイテムを押したとき詳細へ
  for(let i = 0; i < listItemsDom.length; i++) {
    listItemsDom[i].addEventListener('click', function(){
      listDom.classList.add('slideOut')
      pageDom.classList.add('slideIn')
      // ここでスクロールリセット
      pageDom.scrollTo(0, 0)
      makeBallons(i, data)
  
      // ここでフラグを切り替える
      if (!releaseNoteFlags[i]) {
        releaseNoteFlags[i] = true
        // フラグの切り替えを生成済みのhtmlに反映する
        // バルーン
        // ballonIsRead()
        // リスト
        const countDoms = document.getElementsByClassName('js-count')
        for (let i=0; i<countDoms.length; i++) {
          if (releaseNoteFlags[i]) {
            countDoms[i].classList.remove('unRead')
          }
        }
        // localStrageにも反映しとく
        localStorage.setItem('readFlag', JSON.stringify(releaseNoteFlags))
      }
    })
  }
  // 詳細から一覧へ
  backDom.addEventListener('click', function(){
    listDom.classList.remove('slideOut')
    pageDom.classList.remove('slideIn')
  })
}


async function init() {
  const res = await fetch(
  "https://rqfoifxr3x.microcms.io/api/v1/release-note",
  {
    headers: {
      "X-MICROCMS-API-KEY": "309375b1533b47f4b56d85202171276bf164"
    }
  })
  const json = await res.json()
  const cmsData = await json.contents
  console.log(cmsData)

  checkLocalStorage(cmsData)
  
  // チャット画面のtoggle
  toggleChat()

  // チャット一覧の内容描画
  makeListHTML(cmsData)
  
  // チャット一覧-詳細の移動
  moveListToDetail(cmsData)
}
init()



//pages
$('#js-reload').on('click', function () {
  location.reload()
})
