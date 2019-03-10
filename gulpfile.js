const gulp = require("gulp"),
	path = require("path"),
	fs = require("fs"),
	filter = require("gulp-filter"),
	rev = require('gulp-rev'),
	// fileHash = require("gulp-rev"),
	include = require("gulp-file-include"),
	uglify = require("gulp-uglify"),
	minifyCss = require("gulp-clean-css"),
	minifyHtml = require("gulp-htmlmin"),
	rename = require("gulp-rename"),
	del = require("del"),
	browserSync = require("browser-sync").create(),
	proxyMiddleware = require("http-proxy-middleware"),
	sass = require("gulp-sass"),
	sGlob = require("gulp-sass-glob"),
	autoprefixe = require("gulp-autoprefixer"),
	babel = require("gulp-babel"),
	watch = require("gulp-watch"),
	jsPath = "src/static/js/**/*.js",
	scssPath = "src/static/css/**/*.scss",
	htmlPath = "src/view/**/*.html",
	componentsPath = "src/components/**/*.*html",
	publicPath = "src/static/public/**";
sass.compiler = require("node-sass");
//设置js任务
gulp.task("js", function (done) {
	gulp.src(jsPath)
// 		.pipe(filter([jsPath], {
// 			restore: true
// 		}))
		// .pipe(uglify())
// 		.pipe(rename(function (file) {
// 			file.extname
// 		}))
		.pipe(gulp.dest("dev/static/js"));
	done();
})
// 设置css任务
gulp.task("css", function (done) {
	gulp.src(scssPath)
// 		.pipe(filter("src/static/**/*.*", {
// 			restore: true
// 		}))
		.pipe(sGlob())
		.pipe(sass.sync().on("error", sass.logError))
		.pipe(minifyCss())
		.pipe(autoprefixe({
			flexbox: "autoplace"
		}))
		.pipe(rename(function (file) {
			file.extname
		}))
		.pipe(gulp.dest('dev/static/css'))//输出文件夹
	done();
})
//复制静态资源
gulp.task("public", function (done) {
	gulp.src(publicPath)
// 		.pipe(filter(publicPath, {
// 			restore: true
// 		}))
		.pipe(gulp.dest("dev/static/public"))
		done();
})
//设置html任务
gulp.task("html", function (done) {
	const options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: true, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	};
	gulp.src("src/**/*.*")
		.pipe(htmlFilter = filter(htmlPath, {
			restore: true
		}))
		.pipe(include({
			prefix: "@@",
			basepath: "@file"
		}))
		// .pipe(minifyHtml(options))
		.pipe(rename(function (file) {
			file.extname
		}))
		.pipe(gulp.dest('dev/')); //输出文件夹
	done();
});


// 启动任务
gulp.task("server", gulp.series(["html", "css", "js", "public"], function (done) {
	const origin_1 = 'http://192.168.2.215:9000',
		origin_2 = 'http://test.h5.yzqianbao.com',
		origin_3 = 'http://192.168.2.191:9000',
		origin_4 = 'http://192.168.2.183:9000',
		proxy = proxyMiddleware('/nw', {
			target: origin_2,
			changeOrigin: true
		}),
		proxy_ = proxyMiddleware('/web', {
			target: origin_2,
			changeOrigin: true
		}),
		proxy1 = proxyMiddleware('/system', {
			target: origin_2,
			changeOrigin: true
		}),
		proxy2 = proxyMiddleware('/xjbk', {
			target: origin_2,
			changeOrigin: true
		});
	browserSync.init({
		server: {
			baseDir: "dev/",
			middleware: [proxy, proxy1, proxy2, proxy_]
		},
		post: 8050
	});
	gulp.watch([jsPath], gulp.series("js")).on("change", browserSync.reload);
	gulp.watch([scssPath], gulp.series("css")).on("change", browserSync.reload);
	gulp.watch([htmlPath, componentsPath, publicPath], gulp.series(["css","public","js","html"])).on("change", browserSync.reload);
	done();
}))

gulp.task("b-css",function(done){
	gulp.src("dev/static/css/**/*.*",{base:"dev"})
	.pipe(rev())
	.pipe(gulp.dest('dist/'))
	.pipe(rev.manifest())
	.pipe(gulp.dest("dist/jsonMap"))
	done();
})
gulp.task("clean", function () {
	del([
		"dist"
	]).then()
});