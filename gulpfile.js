var gulp = require('gulp');
var data = require('gulp-data');
var fs = require('fs');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-clean-css');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');

var mozjpeg = require('imagemin-mozjpeg');


gulp.task('default', [ 'browser-sync', 'watch', 'pug', 'sass', 'sass-pages', 'babel', 'images']);

// pug
gulp.task('pug', () => {
  var jsonData = JSON.parse(fs.readFileSync('src/_data/index.json', 'utf8'));
  var option = {
    data: jsonData,
    pretty: true
  }
  gulp.src(['src/pug/**/*.pug', '!src/pug/_*/*.pug'])
      .pipe(plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
      }))
      .pipe(pug(option))
      .pipe(gulp.dest('htdocs/'))
});

// sass
gulp.task('sass', () => {
  gulp.src('src/sass/*scss')
      .pipe(plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
      }))
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(minifycss())
      .pipe(gulp.dest('htdocs/assets/styles/'))
});

//sass-pages
gulp.task('sass-pages', () => {
  gulp.src('src/sass/pages/*scss')
      .pipe(plumber({
          errorHandler: notify.onError('Error: <%= error.message %>')
      }))
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(minifycss())
      .pipe(gulp.dest('htdocs/assets/styles/pages/'))
});

// babel
gulp.task('babel', () => {
  gulp.src('src/js/*.js')
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(babel())
    .pipe(gulp.dest('htdocs/assets/scripts/'))
});

// images
gulp.task('images', () => {
  return gulp.src('src/images/**/*.{png,jpg,gif,svg}')
    .pipe(imagemin([
      mozjpeg({
        quality: 85,
        progressive: true
      }),
      imagemin.svgo(),
      imagemin.optipng(),
      imagemin.gifsicle()
    ]))
    .pipe(gulp.dest('htdocs/assets/images/'))
});

gulp.task('watch', () => {
  gulp.watch(['src/pug/**/*.pug'], ['pug']);
  gulp.watch(['src/_data/index.json'], ['pug']);
  gulp.watch(['src/sass/**/*.scss'], ['sass', 'sass-pages']);
  gulp.watch(['src/js/**/'], ['babel']);
  gulp.watch(['src/images/**/*.{png,jpg,gif,svg}'], ['images']);
});

gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: 'htdocs/'
    }
  });
  gulp.watch('htdocs/*.html', ['reload']);
  gulp.watch('htdocs/assets/styles/**/*.css', ['reload']);
  gulp.watch('htdocs/assets/scripts/*.js', ['reload']);
  gulp.watch('htdocs/assets/images/', ['reload']);
});

gulp.task('reload', () => {
  browserSync.reload();
});