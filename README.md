# アニマトメ ani-matome

CSS アニメーションを始めとした、Web 上のアニメーション表現をまとめているサイトです。

## gulp タスク

- pug → HTML
- Sass（scss）→ CSS
  - StyleLint
- TypeScript → Javascript
  - ESLint
  - Webpack bundle
- Local Server
  - Hot Reload
  - Server Side Include（SSI）
- Image Optimize

## 動作確認済み環境

- macOS Monterey 12.2
- node v16.13.0
- npm v8.1.0

## ローカル開発環境の起動

初回のみ

```
npm i
```

```
npm start
```

2 回目以降

```
npm start
```

※ `Cannot find name 'lottie'.`など ts 関連のエラーがいくつか表示されますが、動作には問題ありません。

## データの追加手順

### AF 動画追加の手順

1. `site.json`の links(af)内にオブジェクトを追加してくだい。
2. ローカル環境を起動、トップページに反映されるのを確認してください。

### サンプル追加の手順

1. micro CMS でデータ追加を基本とする。css と js についてはローカルで記述するものとする。
2. 【css】CMS 上で個別 css を on で登録した上で、ローカルで英語名と同じ名前の scss ファイルを`scss/assets/css/pages/`に追加。
3. 【js】使う場合、ライブラリなどの記述も必要とする場合もあるため入力欄はテキストフィールドになっている。ローカルで js ファイルを`js/assets/js/pages/`などに追加し、それを読み込む記述`<script>`タグを適宜書く。
   ※gif 録画には LICEcap`https://www.cockos.com/licecap/`を用いている
   ※作業中の場合、タイトルに`[wip]`を付与してください。

## ディレクトリ構成詳細

`/src/` で開発用ファイルを管理します。

`/dist/` に各種変換/コンパイル/ビルドしたファイルが格納されます。
`/dist/` 配下のファイルは直接編集してはいけません。

gitignore で除外していますが Heroku 等の deploy 環境で Git に含む必要がある場合は、gitignore を編集してください。

ローカルサーバーでは `/dist/` ディレクトリをドキュメントルートとして表示します。

### /src/\_data

HTML の head タグに反映する meta 関連の情報を json で管理します。

### /src/img

gulp の image タスクで、画像を圧縮します。watch 状態であればこのディレクトリにファイルを追加するだけで圧縮します。

`/src/img/` 配下に作成した任意のフォルダ構造のまま公開ディレクトリ(dist)に出力します。

```
例）
/src/img/assets/img/sample.png
↓
/dist/assets/img/sample.png
```

### /src/js

gulp の js タスクで Webpack を使って TypeScript から JavaScript へ変換します。

また、分割している ts ファイルは bundle します。

`/src/js/_module/` 配下には import 用の ts ファイルを格納します。

`/src/js/` 配下に作成した任意のフォルダ構造のまま公開ディレクトリ(dist)に出力します。

```
例）
/src/js/assets/js/script.ts
↓
/dist/assets/js/script.js
```

### /src/public

gulp の copy タスクでファイルを dist へコピーします。

favicon や manifest.json 等の変換不要なファイルを設置します。

`/src/public/` 配下に作成した任意のフォルダ構造のまま公開ディレクトリ(dist)に出力します。

```
例）
/src/public/manifest.json
↓
/dist/manifest.json
```

### /src/pug

gulp の pug タスクで Pug ファイルを HTML に変換します。

`/src/pug/_include/` に extends する layout ファイルやインクルード用ファイルをまとめています。

各 pug ファイルでは `- var directory ='/'` の項目で `/src/_data/site.json` のオブジェクトのキーと紐付けることで json で指定した値を head タグに反映します。

`/src/pug/` 配下に作成した任意のフォルダ構造のまま公開ディレクトリ(dist)に出力します。

```
例）
/src/pug/sample/index.pug
↓
/dist/sample/index.html
```

### /src/scss

gulp の sass タスクで scss ファイルを css に変換します。

`/src/scss/` 配下に作成した任意のフォルダ構造のまま公開ディレクトリ(dist)に出力します。

```
例）
/src/scss/assets/css/style.scss
↓
/dist/assets/css/style.css
```

FLOCSS を参考にディレクトリを分けています。運用ルールに合わせて変更してかまいません。

```
例）
/src/scss/
  ├─ _component/・・・各ページで使えるパーツを格納
  │
  ├─ _foundation/・・・設定ファイルを格納
  │    ├─ _mixin.scss・・・mixinや関数等
  │    ├─ _reset.scss・・・リセット用のstyle
  │    └─ _var.scss・・・カスタムプロパティ（変数）
  │
  ├─ _layout/・・・header/footer等のサイト内で共通の要素
  │    ├─ _header.scss
  │    └─ _footer.scss
  │
  └─ _page・・・各ページ固有のスタイル
       ├─ _top.scss
       ├─ _list.scss
       └─ _xxx.scss
```

## Doing

- メニューを sp 用につくる。ヘッダー端に置く
  -> ui 考えるのが手間！

- hover 系まとめ-ボタン系を cms に登録。

  - 10
  - 11

- 動画の読み込み速度比較, youtube,video タグ,vimeo

* ブラウザ指定で調査中にしてるやつ、一気に埋める。[wip]
  - win での chrome
  - win での firefox
  - ie
  - アンドロイド

## ToDo

### バグ

- [!!!] 個別の ts で外部ライブラリを読めないエラーがでる

### 共通の構成改善

- [!!] 全画面表示のとき、対応ブラウザとかが描画できない問題
  -> モーダルとかで画面固定で表示しよう

- [!] c-btn が見た目好きじゃないので調整
- [!] af で作ったものを youtube にあげるので、それを自動取得したい。youtube の API つかえそう。
- [!!] api キーを直で書いちゃってる問題。.env ファイルにきりわけて git にのせないようにする。
- [!!] ファビコン追加
- [!!] meta 情報改修
- [!!] pug の layout がトップページと個別ページで 2 つに分かれている問題。1 つにまとめて効率的に管理したい。
- [!!] 共通 css ファイルが細分化しすぎてる問題。common.scss とか 1 つにまとめたい。
- [!!!] カテゴリーで絞り込み可能にする。
- [!!!] サイト全体のリデザイン。sp でのテーブルなどいけてないので、モバイルファーストな見た目に。
  - 最新のアニメの内容が設定されるように pug 書いておく
  - ogp 用にいちいちアニメのスクショとるのはしんどい。
- [!!!] 各サンプルのソースを表に出す。コピペ機能もつけたい。
  → だとしたら cms で更新できたほうがよい？
- [!!!] サイトから更新通知を出す。プッシュ？RSS？まだイメージついてない。

### アニメ単体の改修

- [!] lottie.js のでも,全画面じゃないパターンにする。
- [!!] lottie.js 内に css アニメとの併用を取り込む。
- [!!] lottie.js について導入手順をくわしくまとめて追記。
- [!!] 星空のアニメーションがビルドするたびに差分が出てしまう問題
- [!!!] css で制作したアニメを AF でも作りたい
- [!!] https://photoshopvip.net/121220

### 追加予定のサンプル

- 画像が流れるアニメ
- ウマ娘でつかった、スマホでスワイプしてる風のアニメ（画面 2 枚をスライド inout 同時に
- https://photoshopvip.net/121220#tip7「ろってぃぷれびゅー」
- ウマ娘でつかう予定のチャットしてる風アニメ（参考, peep アプリ

### 「ウマ娘のショートストーリーがついでに更新される。チャットで会話してる風。」

-----対応予定-----

- paypay の UI を参考に、メッセージの部分を通知ベルマーク右上固定にする。

- [!!] 未読フラグがトグル部分に赤丸ぽちで反映されるように
  - タップエリアに選択肢が表示される UI。
- [!!!] キャラのアイコン押したら、LINE 風に説明が出る。
  - ボイスとかも流せたら最高。
- [!] これと同じイメージでナレーション的な文言をいられれるようにする…？

------保留-----

- [!!!] チャットを実際にしてる風に 1 つずつでるアニメーション。
  - チャット画面下にタップエリアをつくる。
  - タップされたら各 ballon に active フラグつけていく。いまどこまで表示したかはタップ数でカウントしておき、その個数に応じて ballon のインデックスを指定できる
  - 1 度読んだらもうアニメなしで出しっぱにしとく。未読フラグを読むように。
  - 自動再生機能もあったほうがよい？
- [!!!] チャットで自分の吹き出しになったら選択肢が出るようなつくり。
- 将来的に選択肢で展開される会話が変わるようにしたい。
