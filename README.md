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

- macOS 13.2.1
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

## データの追加手順

1. micro CMS でデータ追加を基本とする。css と js についてはローカルで記述するものとする。
2. 【css】CMS 上で個別 css を on で登録した上で、ローカルで英語名と同じ名前の scss ファイルを`scss/assets/css/pages/`に追加。（記述内でメディアクエリを使いたい場合、 `@use '../../../_foundation/mixin' as *;`を記述する。既存ファイルを参考にしてください。
   ※ 共通部分の css とクラス名被りを起こす可能性があるため個別 css は「pg-英語名」クラス内の.text といった書き方をしてください。（例：cyberpunk.scss
3. 【js】使う場合、ライブラリなどの記述も必要とする場合もあるため入力欄はテキストフィールドになっている。ローカルで js ファイルを`js/assets/js/pages/`などに追加し、それを読み込む記述`<script>`タグを適宜書く。
4. gif 録画には LICEcap`https://www.cockos.com/licecap/`を用いている
5. 作業途中のデータの場合、記事タイトルに`[wip]`を付与してください。

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
