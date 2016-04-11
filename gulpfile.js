var gulp = require('gulp');

var jshint = require('gulp-jshint');
var browserify = require('gulp-browserify');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');
var imagemin = require('gulp-imagemin');
var imageminJpegtran = require('imagemin-jpegtran');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


//environment
var environment = "production";

var jsFiles = [
	'node_modules/jquery/dist/jquery.min.js',
	'app/js/quiz.js',
	'app/js/score.js',
	'app/js/game.js',
	'app/js/app.js'
];

gulp.task('js', function(){
	gulp.src(jsFiles)
		.pipe(concat('app.js'))
		//.pipe(browserify())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

//JS linting task
gulp.task('jshint', function(){
	return gulp.src('app/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


//=====TODO================================


//Compile Sass task
gulp.task('sass', function(){
	return sass([ 'app/scss/*.scss', 'app/scss/**/*.scss'], {
		sourcemap: true,
		style:'expanded'
	})
	.on('error', function(err){
		console.log('Error!', err.message);
	})
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('build/css'));
});

//Watch task
gulp.task('watch', function(){
	gulp.watch('app/js/*.js', ['jshint']);
	gulp.watch(['app/scss/*.scss', 'app/scss/**/*.scss'], ['sass']);
	gulp.watch('app/*.html', ['html']);


});

//Minify task
gulp.task('html', function(){
	if (environment === "production") {
		return gulp.src('app/index.html')
			.pipe(minifyHTML())
			.pipe(gulp.dest('build/'));
	} else {
		return gulp.src('app/index.html')
			.pipe(gulp.dest('build/'));
	}
	
});

//Styles build task and concat all the files
gulp.task('styles', function() {
	return gulp.src('app/css/*.css')
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('build/css'));
});

//image optimize task =====================
gulp.task('images', function() {
	return gulp.src(['app/img/*', 'app/img/**/*'])
		.pipe(imagemin({
			progressive: true,
			use:[imageminJpegtran({ptogressive: true})]
		}))
		.pipe(gulp.dest('build/img'));
});

//fonts
gulp.task('fonts', function(){
	gulp.src('app/fonts/*')
		.pipe(gulp.dest('build/fonts'));
});

//Webserver
gulp.task('webserver', function(){
	gulp.src('build/')
		.pipe(webserver({
			livereload: true,
			open: true
		}));
});


//Build task
gulp.task('build', ['jshint', 'sass', 'html', 'js', 'styles', 'fonts', 'images']);

//Default task
gulp.task('default', ['jshint', 'sass', 'watch', 'webserver']);


