var gulp = require('gulp');
var runSequence = require('run-sequence');
var typescript = require('gulp-typescript');
var rename = require('gulp-rename');
var del = require('del');
var inject = require('gulp-inject');
var webserver = require('gulp-webserver');

var config = require('./gulpfile.config');
var tscConfig = require('./tsconfig.json');

gulp.task('dist:clean', function(done) {
    return del(config.dist.dir, done);
});

gulp.task('ts:compile', function() {
    var tsResult = gulp
        .src(['./src/**/*.ts'])
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult
        .js
        .pipe(gulp.dest(config.dist.dir));
});

gulp.task('assets:copy', function() {
    gulp
        .src(config.es6Dependencies)
        .pipe(gulp.dest(config.dist.es6DepsDir));

    return gulp
        .src(config.dependencies)
        .pipe(gulp.dest(config.dist.depsDir));
});

gulp.task('assets:inject', function() {
    var sourcesEs6 = gulp
        .src(config.dist.es6DepsDir + '**/*.js', {read: false});

    var sources = gulp
        .src(config.dist.depsDir + '**/*.js', {read: false});

    gulp.src(config.src.indexFile)
        .pipe(gulp.dest(config.dist.dir + 'main'))
        .pipe(inject(sources, { relative: true, addRootSlash: true }))
        .pipe(inject(sourcesEs6, { relative: true, addRootSlash: true, starttag: '<!-- inject:es6:js -->' }))
        .pipe(gulp.dest(config.dist.dir + 'main'));
});

gulp.task('webserver', function() {
    gulp.src(config.dist.dir + 'main/')
        .pipe(webserver({
            port: config.server.port,
            open: true,
            directoryListing: false
        }));
});

gulp.task('watch', function() {
    gulp.watch([config.src.dir + '**/*'], ['rebuild']);
});

gulp.task('rebuild', function(done) {
    runSequence(
        'dist:clean',
        ['ts:compile', 'assets:copy'],
        'assets:inject',
        done
    );
});

gulp.task('default', ['rebuild'], function(done) {
    runSequence(
        ['watch', 'webserver'],
        done
    );
});
