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

## リンク追加の手順
* index.jsonにデータを追記するだけ

## サンプル追加の手順
1. `index.json`に必要データを記載
2. `pug/`にjsonのname_enと同名のディレクトリ追加
3. `pug/sample/index.pug`をコピペして当該ディレクトリ配下に設置。適宜編集
4. 個別scssファイルは`sass/pages/`配下にjsonのname_enと同名.scssで作成
5. 一覧ページにはname_enと同名.gifが配置されるので、完成した動きをgif録画し、`images/gif/`配下に用意。

## Task
### done
* AFの基本を覚える
* タブでafterEffectでつくった系のやついれる。
* リンクタブに追加する方法をまとめる
* gifがない場合はjsonにgif:trueを指定しない
* lotteで読み込み。（https://techblog.raccoon.ne.jp/archives/1575508778.html
  * -> bodymainで出力はできた。デモのhtmlはすごいけど後から触りにくそう。一旦デモのやつ置く
    * https://b-risk.jp/blog/2020/05/lottie-animation/
  * jsonだけで入力をためす 


### todo
#### 構成編
* afで作ったものをyoutubeにあげるので、それを自動取得できるようにする。
* cssを1ファイルにまとめる
* cssのソースが見れるように。コピペ機能も必須。
* デザインの調整
* ボタン系まとめを切り分ける
* そもそも静的に作りたくない→headlessCMS化（firebaseだと更新不便
* リスト機能をサンプルに対して作るテーブルとして、そこから参考サイト、コピペができるようにする
* 各ページのogpに画像が自動吐き出ししたい。
  
#### コンテンツ編
* aftereffectで再現もすれば、動画活動とリンクできる。
  * 簡単なものから再現（ex.ピコピコ
* コンテンツが順にふわふわと順番で出てくるアニメ
* svgアニメを充実させたい
  * [UI改善にキラリと役立つ！ SVGアニメーションの作り方まとめ - ICS MEDIA](https://ics.media/entry/15970/)
  * [コピペで使える！ CSS Animationだけで実現するキャラクターアニメーション - ICS MEDIA](https://ics.media/entry/11336/)
  * [コピペで使える！ CSS Animationだけで実現するキャラクターアニメーション - ICS MEDIA](https://ics.media/entry/11336/)
  * https://techblog.raccoon.ne.jp/archives/1569826832.html
* サンプルを実際に自作できるようになりたい
  