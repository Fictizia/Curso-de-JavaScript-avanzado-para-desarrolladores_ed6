const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

//Compile scss into css
function style() {
  //1. Find scss file
  return gulp.src('./scss/**/*.scss')
    //2. Pass it through sass compiler
    .pipe(sass())
    //3. Find where to locate compiled file
    .pipe(gulp.dest('./css'))
    //4. Stream changes
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  // gulp.watch('./script.js')
}

exports.style = style;
exports.watch = watch;