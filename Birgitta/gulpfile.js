//подключение модулей
var gulp       = require('gulp'), // подключаем Gulp
	sass         = require('gulp-sass'), //подключаем Sass пакет,
	browserSync  = require('browser-sync'), // подключаем Browser Sync
	concat       = require('gulp-concat'), // подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // подключаем библиотеку для переименования файлов
	del          = require('del'), // подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// подключаем библиотеку для автоматического добавления префиксов

//создаём таск, компилирующий .sass-файлы в .css-файлы
gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // преобразуем Sass в CSS посредством gulp-sass	
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // создаем префиксы
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
	 	stream:true                  
	 })
	 );
});

//таск, собирающий все js-файлы в 1 и минифицирующий их
gulp.task('scripts', function() {
	return gulp.src([ // ,берем все необходимые библиотеки
		'app/libs/jquery/dist/jquery.min.js', // ,берем jQuery
		'app/libs/gsap/easing/*.min.js',
		'app/libs/gsap/plugins/*.min.js',
		'app/libs/gsap/utils/*.min.js',
		'app/libs/gsap/*.min.js',
		'app/libs/createjs-2015.11.js',
		'app/libs/anime.min.js',
		])
		.pipe(concat('libs.min.js')) // собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // сжимаем JS файл
		.pipe(gulp.dest('app/js')); // выгружаем в папку app/js
});

//таск для импорта css
gulp.task('css-libs', function() {
	return gulp.src('app/css/libs.css') // выбираем файл для минификации
		.pipe(cssnano()) // сжимаем
		.pipe(rename({suffix: '.min'})) // добавляем суффикс .min
		.pipe(gulp.dest('app/css')); // выгружаем в папку app/css
});

//таск для запуска сервера?
 gulp.task('browser-sync', function(){
 		browserSync({
 			server: {
 				baseDir: 'app' //выбираем папку, которая будет сервером
 			},
 				notify: false //отключаем уведомления
 		});
 });

//таск для очистки папки dist от "мусора"
 gulp.task('clean', function(callback) {
	return del('dist'); // удаляем папку dist перед сборкой
	callback();
});

 //таск для очистки папки кеша 
 gulp.task('clear', function(callback) {
	return cache.clearAll();
	callback();
});

//таск для оптимизации изображений
gulp.task('img', function() {
	return gulp.src('app/img/**/*') // берем все изображения из app
		.pipe(cache(imagemin({ // сжимаем их с наилучшими настройками и добавляем функцию кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // выгружаем на продакшн
});

 //создаём таск, "слушающий" изменения в .sass-,html- b js-файлах и перезагружающий браузер при их сохранении
gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
});

//подготовка к продакшну
gulp.task('build',  gulp.series('clean', 'img', 'sass', 'scripts', function(cb) {

	var buildCss = gulp.src(// переносим CSS стили в продакшн
		'app/css/main.css',
		'app/css/libs.min.css'
		)
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // переносим шрифты в продакшн
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') // переносим скрипты в продакшн
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // переносим HTML в продакшн
	.pipe(gulp.dest('dist'));
	cb();

}));

//чтобы таски 'watch' и 'browser-sync' могли работать одновременно:
gulp.task('default', gulp.parallel('browser-sync','watch','css-libs','scripts'));


/////////////////////////////////////////////////////////////////////////////
//////////////////запуск в командной строке командой  gulp///////////////////
/////////////////////////////////////////////////////////////////////////////



