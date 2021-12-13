// gulp系
const { gulp, src, dest, watch, lastRun, parallel } = require('gulp')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const browserSync = require('browser-sync')

// pug系
const fs = require('fs')
const data  = require('gulp-data')
const gulpPug = require('gulp-pug')

// scss系
const sassGlob = require("gulp-sass-glob")
const gulpSass = require('gulp-sass')(require('sass'))
const postcss = require("gulp-postcss")
const autoprefixer = require('gulp-autoprefixer')

// js系
const babel = require('gulp-babel')

// 画像系
const imagemin = require('gulp-imagemin')
const mozjpeg = require('imagemin-mozjpeg')

// パスまとめ
const path = {
  json: 'src/_data/index.json',
  pug: {
    src: 'src/pug/!(_)**/*.pug',
    dist: 'htdocs/',
    basedir: 'src/pug/'
  },
  scss: {
    src: 'src/scss/**/*.scss',
    dist: 'htdocs/assets/styles/',
    pages: {
      src: 'src/sass/pages/*scss',
      dist: 'htdocs/assets/styles/pages/'
    }
  },
  babel: {
    src: 'src/js/**/*.js',
    dist: 'htdocs/assets/scripts/'
  },
  images: {
    src: 'src/images/**/*.{png,jpg,gif,svg}',
    dist: 'htdocs/assets/images/'
  }
}


// pug -> html
const pugFunc = () => {
  const jsonData ={
    site: JSON.parse(fs.readFileSync(path.json))
  }
  return src(path.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(data(jsonData))
    .pipe(
      gulpPug({
        // ルート相対パスでincludeが使えるようにする
        basedir: path.pug.basedir,
        // Pugファイルの整形
        pretty: true,
      })
    )
    .pipe(dest(path.pug.dist))
    .pipe(browserSync.reload({ stream: true }))
}


// scss -> main.css
const scssFunc = () => {
  return src(path.scss.src, { sourcemaps: true })
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(sassGlob())
  .pipe(gulpSass())
  .pipe(
    postcss([
      autoprefixer({
        cascade: false,
        grid: true
      })
    ])
  )
  .pipe(dest(path.scss.dist, { sourcemaps: "./map" }))
  .pipe(browserSync.reload({ stream: true }))
}

// page独自のcssページ
const scssPagesFunc = () => {
  return src(path.scss.pages.src)
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(gulpSass())
  .pipe(
    postcss([
      autoprefixer({
        cascade: false,
        grid: true
      })
    ])
  )
  .pipe(dest(path.scss.pages.dist))
  .pipe(browserSync.reload({ stream: true }))
}


// jsES6 -> jsES5
const babelFunc = () => {
  return src(path.babel.src)
  .pipe(plumber({
    errorHandler: notify.onError('Error: <%= error.message %>')
  }))
  .pipe(babel())
  .pipe(dest(path.babel.dist))
  .pipe(browserSync.reload({ stream: true }))
}


// imagesMin
const imagesFunc = () => {
  return src(path.images.src)
  .pipe(imagemin([
    mozjpeg({
      quality: 85,
      progressive: true
    }),
    imagemin.svgo(),
    imagemin.optipng(),
    imagemin.gifsicle()
  ]))
  .pipe(dest(path.images.dist))
}


const watchFiles = () => {
  watch(path.pug.src, pugFunc)
  watch(path.json, pugFunc)
  watch(path.scss.src, scssFunc)
  watch(path.scss.pages.src, scssPagesFunc)
  watch(path.babel.src, babelFunc);
  watch(path.images.src, imagesFunc);
}

const browserSyncFunc = () => {
  browserSync({
    server: {
      baseDir: 'htdocs/'
    },
    reloadOnRestart: true
  })
}

exports.default = parallel(watchFiles, browserSyncFunc)
exports.build = parallel(pugFunc, scssFunc, babelFunc, imagesFunc)
