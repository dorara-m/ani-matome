# アニマトメ

## 概要
CSSアニメのまとめサイト（仮

## 起動
1. `npm install`
2. `npm run start`

## 環境
### 言語
- pug → html
- scss → css
- es6 → es5

### ファイル構成
開発はsrcディレクトリでおこない、コンパイル後ファイルはhtdocsディレクトリに出力されます。
```
root/
  ├── src/
  ├── htdocs/
  ├── .gitignore
  ├── gulpfile.js
  ├── package.json
  └── README.md
```

## ページ追加の手順
1. pug/にページ名でディレクトリ追加してindex.pugを作成
2. pug/sample/index.pugをコピペして適宜編集
3. scssファイルはsass/pages/配下に作成
4. 一覧表示用のindex.jsonにタイトルとディレクトリ名を記述
