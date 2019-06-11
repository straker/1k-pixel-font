const gulp = require('gulp');
const terser = require('gulp-terser');
const size = require('gulp-size');

function sizeTask() {
  return gulp.src('index.js')
    .pipe(terser())
    .pipe(size({
      gzip: true
    }));
}

gulp.task('default', gulp.series(sizeTask));