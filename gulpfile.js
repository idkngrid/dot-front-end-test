// Dependencies
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('src/scss/*.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano]))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// Js Task
function jsTask() {
    return src('src/js/*.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(callback) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    callback();
}

function browsersyncReload(callback) {
    browsersync.reload();
    callback();
}

// Watch Task
function watchTask() {
    watch('*.html', browsersyncReload);
    watch(['src/scss/**/*.scss', 'src/js/**/*.js'], series(
        scssTask,
        jsTask,
        browsersyncReload
    ));
}

// Default Gulp
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);