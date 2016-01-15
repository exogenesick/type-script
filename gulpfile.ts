import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import * as ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json');

gulp.task('ts:compile', (done: gulp.TaskCallback) =>
    
);

gulp.task('default', (done: gulp.TaskCallback) =>
    runSequence('ts:compile', done)
);
