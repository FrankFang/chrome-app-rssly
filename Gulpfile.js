var TEST = 'test/'


var gulp = require('gulp')
var connect = require('gulp-connect')

gulp.task('debug', ['connect', 'watch'])

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
});