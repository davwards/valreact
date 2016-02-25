var gulp = require('gulp');
gulp.task('images', function() {
    var imgSrc = './src/img/**/*',
        imgDst = './dist/img';

    return gulp.src(imgSrc)
        // .pipe(changed(imgDst))
        // .pipe(imagemin())
        .pipe(gulp.dest(imgDst))
});
