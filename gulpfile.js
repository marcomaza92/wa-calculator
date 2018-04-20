var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var minifyjs = require('gulp-js-minify');
var cleanCSS = require('gulp-clean-css');
var path = require('path');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
      proxy: 'http://mmaza.personal.com/projects/wasm-calculator'
    });

    gulp.watch([
      '*.scss'
    ], ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([
      '*.scss'
    ])
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
