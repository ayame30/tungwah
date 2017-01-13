var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var hbs = require('gulp-hbs');

gulp.task('watch', function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./data/*.json', ['hbs']);
});

gulp.task('sass', function(){
	gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./html/styles/'));
});

gulp.task('hbs', function () {
	gulp.src('./data/**/*.json')
 	   .pipe(hbs(gulp.src('templates/index.hbs')))
 	   .pipe(gulp.dest('./html'))
	   .on('error', sass.logError);
});

gulp.task('default', ['hbs','watch']);
