var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var moduleImporter = require('sass-module-importer');

var AUTOPREFIXER_BROWSERS = [];

//sass
gulp.task('sass', function () {
  gulp.src('./src/css/boot.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(cssmin())
    .pipe(sourcemaps.write('./maps'))
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('public/css/'));
});

// Default task
gulp.task('default', function () {
  gulp.start('sass');
});