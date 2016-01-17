module.exports = {
    dist: {
        dir: 'dist/',
        appDir: 'dist/app/',
        depsDir: 'dist/lib/'
    },
    src: {
        dir: 'src/',
        indexFile: 'src/index.html',
        depsFiles: [
            'node_modules/systemjs/dist/system.js',
            'node_modules/angular2/bundles/angular2.min.js'
        ]
    },
    server: {
      port: 8080
    }
};
