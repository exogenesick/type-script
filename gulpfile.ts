import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';
import * as typescript from 'gulp-typescript';

const tsProject = typescript.createProject('tsconfig.json');
const DIST_DIR:string = 'dist';

gulp.task('ts:compile', (done: gulp.TaskCallback) => {
    var tsResult = tsProject.src()
        .pipe(typescript(tsProject));
    return tsResult.js.pipe(gulp.dest(DIST_DIR));
});

gulp.task('dist:clean', (done: gulp.TaskCallback) => {
    
});

gulp.task('default', (done: gulp.TaskCallback) =>
    runSequence('ts:compile', done)
);
