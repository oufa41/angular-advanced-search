// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/angular-advanced-search'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        //  colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 60000,
        singleRun: true,
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-web-security', '--disable-translate', '--disable-extensions', '--remote-debugging-port=9222']
            }
        },
        browsers: ['ChromeHeadless'],
        restartOnFileChange: true,
        failOnEmptyTestSuite: false
    });
};

// module.exports = function(config) {
//     config.set({
//         basePath: '',
//         frameworks: ['jasmine', '@angular/cli'],
//         plugins: [
//             require('karma-jasmine'),
//             require('karma-chrome-launcher'),
//             require('karma-jasmine-html-reporter'),
//             require('karma-junit-reporter'),
//             require('@angular/cli/plugins/karma')
//         ],
//         reporters: ['junit'],
//             
//         junitReporter: {
//             outputDir: 'karma-results',
//                 
//             outputFile: 'karma-results.xml'    
//         },
//         angularCli: {
//             environment: 'dev',
//         },
//         port: 9876,
//         logLevel: config.LOG_INFO,
//         browsers: ['ChromeHeadless'],
//             
//         autoWatch: false,
//             
//         singleRun: true    
//     });
// };