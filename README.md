# アニマトメ

## 概要
CSSアニメのまとめサイト

## 起動（yarn
yarnのインストール前提。なければnpmで代用可能です。
1. `yarn` (= `npm install`
2. `yarn start` (= `npm run start`

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
  ├── README.md
  └── yarn.lock
```