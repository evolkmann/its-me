const rename = require('gulp-rename');

module.exports = (gulp, callback) => {
    return gulp.src('src/package.prod.json')
        .pipe(rename('package.json'))
        .pipe(gulp.dest('dist/'));
};
