module.exports = {
    es6Dependencies: [
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/es6-shim/es6-shim.min.js',
        'node_modules/systemjs/dist/system.js'
    ],
    dependencies: [
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.min.js'
    ],
    dist: {
        dir: 'dist/',
        es6DepsDir: 'dist/src/main/es6/',
        depsDir: 'dist/src/main/lib/'
    },
    src: {
        dir: 'src/',
        indexFile: 'src/main/index.html'
    },
    server: {
        port: 8080
    }
};
