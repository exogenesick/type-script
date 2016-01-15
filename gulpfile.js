"use strict";
var gulp = require('gulp');
var runSequence = require('run-sequence');
gulp.task('postinstall', function (done) {
    return runSequence('clean', 'npm', done);
});
