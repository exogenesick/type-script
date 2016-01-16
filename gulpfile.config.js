module.exports = {
    dist: {
        dir: 'dist/',
        indexFile: 'src/index.html',
        depsDir: 'dist/lib/'
    },
    src: {
        depsFiles: [
            'node_modules/systemjs/dist/system.js',
            'node_modules/angular2/bundles/angular2.min.js'
        ]
    }
};