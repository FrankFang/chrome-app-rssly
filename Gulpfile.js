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

gulp.task('debug', ['clean', 'connect', 'copy', 'browserify', 'watch'])

gulp.task('copy', function () {
    return gulp.src([APP + '**/*', '!' + APP + 'app.js'])
        .pipe(gulp.dest(DIST))
})

gulp.task('browserify', function () {
    return gulp.src(APP + 'app.js')
        .pipe(browserify({
            shim: {
//                'jquery-rss': {
//                    path: 'node_modules/jquery-rss/src/jquery.rss.js',
//                    exports: 'null',
//                    depends: {
//                        jquery: 'jQuery'
//                    }
//                }
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

gulp.task('html', function () {
    gulp.src(TEST + '*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch([TEST + '*'], ['html']);
    gulp.watch([APP + '**/*', '!' + APP + 'app.js'], ['copyNewer'])
    gulp.watch([APP + 'app.js'], ['browserify'])
});

gulp.task('copyNewer', function () {
    gulp.src([APP + '**/*', '!' + APP + 'app'])
        .pipe(newer([APP + '**/*', '!' + APP + 'app']))
        .pipe(gulp.dest(DIST))
})