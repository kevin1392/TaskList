const gulp= require('gulp');
const babel= require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('es6',() =>{
   return gulp.src('./assets/js/*.js')
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(gulp.dest('./js/'))
});

gulp.task('sass',()=>{
   return gulp.src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
});
gulp.task('default',() =>{
    gulp.watch('./assets/js/*.js',['es6']);
    gulp.watch('./assets/scss/*.scss',['sass']);
});
