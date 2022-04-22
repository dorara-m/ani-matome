// ローカルストレージのreadIdsを取得する関数
// readIdsは読んだチャットのidが配列に入るもの、これによりチャットの順序などが移動しても正確に「そのチャット」を特定できる
// 既読が存在しない場合は空配列が返るように
const getReadIds = (): string[] => {
  const readIds = localStorage.getItem('readIds')
  return readIds ? JSON.parse(readIds) : []
}

const toggleChat = () => {
  const wrapDom = document.getElementById('js-note-wrap')
  const toggleNoteDom = document.getElementById('js-note-toggle')

  if (!toggleNoteDom || !wrapDom) {
    return
  }
  toggleNoteDom.addEventListener('click', () => {
    wrapDom.classList.toggle('-js-active')
  })
}

const removeBr = (str: string) => {
  if (str.indexOf('\n') == -1) {
    return str
  }
  return str.replace('\n', '')
}

const trimString = (str: string, max_length: number) => {
  if (str.length <= max_length) {
    return str
  }
  return str.substring(0, max_length) + '…'
}

const formatDate = (date: string) => {
  const dt = new Date(date)
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const day = dt.getDate()
  return `${year}-${month}-${day}`
}

const insertBr = (str: string) => {
  return str.replace('\n', '<br>')
}

const makeListHTML = (data: any) => {
  const readIds = getReadIds()
  const listContentDom = document.getElementById('js-note-listContent')
  if (!listContentDom) return

  const list = data
  let html = '<ul>'
  for (let i = 0; i < list.length; i++) {
    html += `<li class="js-note-item">
    <div class="icon">
    <img src="${list[i].chats[0].who.icon.url}" alt="" />
    </div>
    <div class="text">
    <div class="head">${formatDate(list[i].date)}</div>
    <p>${trimString(removeBr(list[i].chats[0].says), 13)}</p>
    </div>
    <div class="count js-count ${
      readIds.includes(list[i].id) ? '' : 'unRead'
    }">${list[i].chats.length}</div>
    </li>`
  }
  html += '</ul>'
  listContentDom.innerHTML = html
}

const makeBallons = (data: any) => {
  const numberOfUma = data.person
  const place = data.place
  const hedaDom = document.getElementById('js-note-head')
  const chatDom = document.getElementById('js-note-chat')
  if (!hedaDom || !chatDom) return
  hedaDom.innerHTML = `${place} (${numberOfUma})`

  const notes = data.chats

  let html = ''
  notes.forEach((note: any) => {
    html += `<li>
    <div class="icon">
      <img src="${note.who.icon.url}", alt="${note.who.nameJp}">
    </div>
    <div class="left">
      <div class="name">${note.who.nameJp}</div>
      <div class="says">${insertBr(note.says)}</div>
    </div>
    </li>`
    if (note.image) {
      html += `<li>
      <div class="icon">
      <img src="${note.who.icon.url}", alt="${note.who.nameJp}">
      </div>
      <div class="left">
        <div class="name">${note.who.nameJp}</div>
        <a href="${note.image.url}" target="_blank" class="saysImage">
          <img src="${note.image.url}", alt="">
        </a>
      </div>
      </li>`
    }
    if (note.link) {
      html += `<li>
      <div class="icon">
      <img src="${note.who.icon.url}", alt="${note.who.nameJp}">
      </div>
      <div class="left">
        <div class="name">${note.who.nameJp}</div>
        <a href="${note.link}" target="_blank" class="says -link">${note.link}</a>
      </div>
      </li>`
    }
  })
  chatDom.innerHTML = html
}

const setListToDetail = (data: any) => {
  const listDom = document.getElementById('js-note-list')
  const pageDom = document.getElementById('js-note-page')
  const backDom = document.getElementById('js-note-back')
  const listItemsDom = document.getElementsByClassName('js-note-item')

  if (!listDom || !pageDom || !backDom) {
    return
  }

  // 一覧アイテムを押したとき詳細へ
  for (let i = 0; i < listItemsDom.length; i++) {
    listItemsDom[i].addEventListener('click', () => {
      const readIds = getReadIds()
      listDom.classList.add('slideOut')
      pageDom.classList.add('slideIn')
      // ここでスクロールリセット
      pageDom.scrollTo(0, 0)
      makeBallons(data[i])

      // ここでフラグを切り替える

      if (!readIds.includes(data[i].id)) {
        readIds.push(data[i].id)
        const countDoms = document.getElementsByClassName('js-count')
        countDoms[i].classList.remove('unRead')
        // localStrageに既読を反映
        localStorage.setItem('readIds', JSON.stringify(readIds))
      }
    })
  }
  // 詳細から一覧へ
  backDom.addEventListener('click', function () {
    listDom.classList.remove('slideOut')
    pageDom.classList.remove('slideIn')
  })
}

const init = async () => {
  try {
    const cmsData = await fetch('https://uma-chat.microcms.io/api/v1/chat', {
      headers: {
        'X-MICROCMS-API-KEY': 'eb94b33042b64da7badbbba4642b22db81a3',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK')
        }
        return response.json()
      })
      .then((data) => data.contents)
      .catch((error) => {
        throw new Error(error)
      })
    // console.log(cmsData)

    // チャット画面のtoggle
    toggleChat()

    // チャット一覧の内容描画
    makeListHTML(cmsData)

    // チャット一覧-詳細の移動
    setListToDetail(cmsData)
  } catch (error) {
    console.error(error)
  }
}
init()

//pages
const reloadFunc = () => {
  const reloadBtn = document.getElementById('js-reload')
  if (!reloadBtn) return
  reloadBtn.addEventListener('click', () => {
    location.reload()
  })
}
reloadFunc()

const rect = () => {
  const rectBtn = document.querySelector('.rectBtn')
  if (!rectBtn) return
  rectBtn.addEventListener('click', ()=> {
    console.log('click rect')
    const rect = document.querySelector('.rect')
    rect?.classList.toggle('active')
  })
}
// 動作しないので保留
// rect()
