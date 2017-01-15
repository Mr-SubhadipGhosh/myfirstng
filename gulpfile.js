var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var browserify =  require('gulp-browserify'); 
 
var paths = {
  src: ['src/app.js'],
  dist: 'dist/',
  otherSrc: ['template/*.html','node_modules/angular-route/angular-route.min.js','node_modules/angular/angular.min.js']
};

gulp.task('clean', function() {
  return del([paths.dist]);
});
 
gulp.task('scripts', ['clean'], function() {
  // return gulp.src(paths.src)
  //   .pipe(sourcemaps.init())
  //     .pipe(uglify({ mangle: false }))
  //     .pipe(concat('app.js'))
  //   .pipe(sourcemaps.write())
  //   .pipe(gulp.dest(paths.dist));
  return gulp.src(paths.src[0])
        .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
        //.pipe(uglify({ mangle: false }))
        .pipe(gulp.dest(paths.dist));
});
 gulp.task('others',['scripts'],function(){
   return gulp.src(paths.otherSrc)
   .pipe(gulp.dest(paths.dist));
 });
gulp.task('watch', function() {
  var srcPath = JSON.parse(JSON.stringify(paths.src));
  srcPath.push(paths.otherSrc);
  gulp.watch(srcPath, ['others']);
});
 
gulp.task('default', ['watch', 'scripts', 'others']);