const config = require('./gulpfile.config');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const typescript = require('gulp-typescript');
const rename = require('gulp-rename');
const del = require('del');
const inject = require('gulp-inject');
const angularFilesort = require('gulp-angular-filesort');
const webserver = require('gulp-webserver');
const tslint = require("gulp-tslint");

gulp.task('dist:clean', () => {
  return del(config.dist.dir);
});

gulp.task('ts:lint', () => {
    gulp.src(config.src.dir + '**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
});

gulp.task('ts:compile', () => {
  var tsProject = typescript.createProject('tsconfig.json');
  return tsProject
    .src()
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(config.dist.appDir))
});

gulp.task('assets:copy', () => {
  return gulp
    .src(config.src.depsFiles)
    .pipe(gulp.dest(config.dist.depsDir));
});

gulp.task('assets:inject', () => {
  var sources = gulp
    .src(config.dist.depsDir + '**/*.js')
    .pipe(angularFilesort());

  return gulp.src(config.src.indexFile)
    .pipe(gulp.dest(config.dist.dir))
    .pipe(inject(sources, { relative: true, addRootSlash: true }))
    .pipe(gulp.dest(config.dist.dir));
});

gulp.task('webserver', () => {
  gulp.src(config.dist.dir)
    .pipe(webserver({
      port: config.server.port,
      open: true,
      directoryListing: false
    }));
});

gulp.task('watch', () => {
    gulp.watch([config.src.dir + '**/*.ts'], ['ts:lint', 'ts:compile']);
});

gulp.task('default', (done) =>  {
  runSequence(
    'dist:clean',
    ['ts:compile', 'assets:copy'],
    'assets:inject',
    ['watch', 'webserver'],
    done
  );
});
