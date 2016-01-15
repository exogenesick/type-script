var gulp = require('gulp');
var runSequence = require('run-sequence');
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json');
var DIST_DIR = 'dist';
gulp.task('ts:compile', function (done) {
    var tsResult = tsProject.src()
        .pipe(typescript(tsProject));
    return tsResult.js.pipe(gulp.dest(DIST_DIR));
});
gulp.task('dist:clean', function (done) {
});
gulp.task('default', function (done) {
    return runSequence('ts:compile', done);
});
