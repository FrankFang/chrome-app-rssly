var TEST = 'test/'
var DIST = 'dist/'
var APP = 'chrome-app/'


var gulp = require('gulp')
var connect = require('gulp-connect')
var browserify = require('gulp-browserify')
var newer = require('gulp-newer')
var clean = require('gulp-clean');

gulp.task('clean', function () {
    return gulp.src(DIST + '**/*', {read: false})
        .pipe(clean());
});

gulp.task('debug', ['clean', 'connect', 'copy', 'less', 'browserify', 'watch'])

gulp.task('copy', function () {
    return gulp
        .src([
                APP + '**/*',
                '!' + APP + 'main.js'
        ])
        .pipe(gulp.dest(DIST))
})

gulp.task('browserify', function () {
    return gulp.src(APP + 'main.js')
        .pipe(browserify({
            debug: true,
            shim: {
                'angular': {
                    path: 'node_modules/angular/index-browserify.js',
                    exports: 'angular'
                },
                'angular-chrome-storage': {
                    path: 'chrome-app/vendors/angular-chrome-storage.js',
                    exports: 'chromeStorage'
                }
            }
        }))
        .pipe(gulp.dest(DIST))
});

gulp.task('connect', function () {
    connect.server({
        root: TEST,
        livereload: true
    });
});

var less = require('gulp-less')
gulp.task('less', function () {
    return gulp.src(APP + '**/*.less')
        .pipe(less())
        .pipe(gulp.dest(DIST))
});

gulp.task('html', function () {
    gulp.src(TEST + '*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch([TEST + '*'], ['html']);
    gulp.watch([APP + '**/*', '!' + APP + 'main.js'], ['copy'])
    gulp.watch([APP + '**/*.js'], ['browserify'])
    gulp.watch([APP + '**/*.less'], ['less'])
});

//gulp.task('copyNewer', function () {
//    gulp.src([APP + '**/*', '!' + APP + 'app'])
//        .pipe(newer([APP + '**/*', '!' + APP + 'app']))
//        .pipe(gulp.dest(DIST))
//})