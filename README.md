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
1. `index.json`に必要データを記載
2. `pug/`にjsonのname_enと同名のディレクトリ追加
3. `pug/sample/index.pug`をコピペして当該ディレクトリ配下に設置。適宜編集
4. scssファイルはsass/pages/配下にjsonのname_enと同名.scssで作成
