var config = require('./gulpfile.config');
var gulp = require('gulp');
var runSequence = require('run-sequence');
var typescript = require('gulp-typescript');
var rename = require('gulp-rename');
var del = require('del');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var webserver = require('gulp-webserver');
var tslint = require('gulp-tslint');

gulp.task('dist:clean', function() {
    return del(config.dist.dir);
});

gulp.task('ts:lint', function() {
    gulp.src(config.src.dir + '**/*.ts')
      .pipe(tslint())
      .pipe(tslint.report('verbose'));
});

gulp.task('ts:compile', function() {
    var tsProject = typescript.createProject('tsconfig.json');
    return tsProject
        .src()
        .pipe(typescript(tsProject))
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
    var sources = gulp
        .src(config.dist.depsDir + '**/*.js')
        .pipe(angularFilesort());

    var sourcesEs6 = gulp
        .src(config.dist.es6DepsDir + '**/*.js')
        .pipe(angularFilesort());

    gulp.src(config.src.indexFile)
        .pipe(gulp.dest(config.dist.dir + 'src/main'))
        .pipe(inject(sources, { relative: true, addRootSlash: true }))
        .pipe(gulp.dest(config.dist.dir + 'src/main'));

    return gulp.src(config.src.indexFile)
        .pipe(gulp.dest(config.dist.dir + 'src/main'))
        .pipe(inject(sourcesEs6, { relative: true, addRootSlash: true, name: 'es6' }))
        .pipe(gulp.dest(config.dist.dir + 'src/main'));
});

gulp.task('webserver', function() {
    gulp.src(config.dist.dir + 'src/main/')
        .pipe(webserver({
            port: config.server.port,
            open: true,
            directoryListing: false
        }));
});

gulp.task('watch', function() {
    gulp.watch([config.src.dir + '**/*.ts'], ['ts:lint', 'ts:compile']);
});

gulp.task('default', function(done) {
    runSequence(
        'dist:clean',
        ['ts:compile', 'assets:copy'],
        'assets:inject',
        ['watch', 'webserver'],
        done
    );
});
