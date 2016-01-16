const config = require('./gulpfile.config');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const typescript = require('gulp-typescript');
const rename = require('gulp-rename');
const del = require('del');
const inject = require('gulp-inject');
const angularFilesort = require('gulp-angular-filesort');

gulp.task('dist:clean', (done) => {
  return del(config.dist.dir);
});

gulp.task('ts:compile', (done) => {
  var tsProject = typescript.createProject('tsconfig.json');
  return tsProject
    .src()
    .pipe(typescript(tsProject))
    .pipe(gulp.dest(config.dist.dir))
});

gulp.task('assets:copy', () => {
  return gulp
    .src(config.src.depsFiles)
    .pipe(gulp.dest(config.dist.depsDir));
});

gulp.task('app:rename', () => {
  gulp.src(config.dist.dir + 'src/**')
    .pipe(gulp.dest(config.dist.dir + 'app'));

  return del(config.dist.dir + 'src')
});

gulp.task('assets:inject', () => {
  var sources = gulp
    .src(config.dist.depsDir + '**/*.js')
    .pipe(angularFilesort());

  return gulp.src(config.dist.indexFile)
    .pipe(gulp.dest(config.dist.dir))
    .pipe(inject(sources, { relative: true, addRootSlash: true }))
    .pipe(gulp.dest(config.dist.dir));
});

gulp.task('default', (done) =>  {
  runSequence(
    'dist:clean',
    ['ts:compile', 'assets:copy'],
    'assets:inject',
    'app:rename',
    done
  );
});
