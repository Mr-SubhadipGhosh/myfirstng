var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
 
var paths = {
  src: ['src/*.js'],
  dist: 'dist/'
};
 

gulp.task('clean', function() {
  return del([paths.dist]);
});
 
gulp.task('scripts', ['clean'], function() {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
      .pipe(uglify({ mangle: false }))
      .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist));
});
 
gulp.task('watch', function() {
  gulp.watch(paths.src, ['scripts']);
});
 
gulp.task('default', ['watch', 'scripts']);