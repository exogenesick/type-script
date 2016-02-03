module.exports = function(config) {
    config.set({

        basePath: '.',

        frameworks: ['jasmine'],

        files: [
            { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: false },
            { pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: false },
            { pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: false },
            { pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: false },

            { pattern: 'karma-test-shim.js', included: true, watched: false },

            { pattern: 'dist/**/*.js', included: false, watched: false }
        ],

        port: 9876,

        logLevel: config.LOG_INFO,

        colors: true,

        autoWatch: true,

        browsers: ['Chrome'],

        reporters: ['dots', 'coverage'],

        preprocessors: {
            'dist/**/!(*spec).js': ['coverage']
        },

        singleRun: true
    })
};
