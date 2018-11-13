var gulp = require('gulp')
var connect = require('gulp-connect')

gulp.task('webserver', function() {
    connect.server({
        livereload: true,
        port: 1314,
    })
})

gulp.task('reload', function() {
    gulp.src('**/*.html')
        .pipe(connect.reload())
})
gulp.task('watch', function() {
    gulp.watch(['**/*.html', '**/*.css', '**/*.js'], ['reload'])
})

gulp.task('default', ['webserver', 'watch'])