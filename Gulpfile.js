/* jshint node:true */
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

gulp.task('debug', ['clean', 'copy', 'less', 'browserify', 'fileinclude', 'watch'])

gulp.task('copy', function () {
    return gulp
        .src([
                APP + '**/*',
                '!' + APP + 'main.js',
                '!' + APP + '*.html'
        ])
        .pipe(gulp.dest(DIST))
})

gulp.task('browserify', function () {
    return gulp.src(APP + 'main.js')
        .pipe(browserify({
            debug: true,
            shim: {
//                'angular': {
//                    path: 'node_modules/angular/lib/angular.min.js',
//                    exports: 'angular'
//                }
            },
            transform: ['coffeeify'],
            extensions: ['.coffee'],
            noParse: 'node_modules/angular/lib/angular.min.js',
            detectGlobals: false
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
    return gulp.src([
            APP + '**/*.less',
            APP + '**/_*.less'
    ])
        .pipe(less())
        .pipe(gulp.dest(DIST))
});

gulp.task('html', function () {
    gulp.src(TEST + '*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    //gulp.watch([TEST + '*'], ['html']);
    gulp.watch([
            APP + '**/*',
            '!' + APP + 'main.js',
            '!' + APP + '*.html'
    ], ['copy'])
    gulp.watch([APP + '**/*.{js,coffee}'], ['browserify'])
    gulp.watch([APP + '**/*.less'], ['less'])
    gulp.watch([APP + '*.html'], ['fileinclude'])
});

//gulp.task('copyNewer', function () {
//    gulp.src([APP + '**/*', '!' + APP + 'app'])
//        .pipe(newer([APP + '**/*', '!' + APP + 'app']))
//        .pipe(gulp.dest(DIST))
//})

var fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function () {
    gulp.src([APP + '*.html'])
        .pipe(fileinclude())
        .pipe(gulp.dest(DIST));
});
