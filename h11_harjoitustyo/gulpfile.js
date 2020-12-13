const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

//compile scss into css
function style() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
	.pipe(gulp.dest('src/css'))
    .pipe(cleanCSS())
	.pipe(gulp.dest('src/css/min'))
    .pipe(browserSync.stream());
}

//move js files to the src
function js() {
	return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/jquery/dist/jquery.min.js' ])
	  .pipe(gulp.dest('src/js'))
	  .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./src",
           index: "/index.html"
        }
    });
    gulp.watch('src/scss/**/*.scss', style)
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.js = js;
exports.style = style;
exports.watch = watch;