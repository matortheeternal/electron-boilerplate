// Karma configuration
// Generated on Thu Aug 03 2017 15:01:49 GMT-0400 (Eastern Daylight Time)

const moduleName = 'electronBoilerplate'; // Replace electron-boilerplate with the name of your project

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
	  { pattern: 'src/**/*!(.spec).js', included: false },
	  'src/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
	  'src/**/*!(.spec).js': ['rollup'],
	  'src/**/*.spec.js': ['rollupTests']
    },
	
	rollupPreprocessor: {
	  plugins: [
	    // Add whatever Rollup plugins you need here, with the format require('<plugin-name>')()
	  ],
	  format: 'iife',
	  moduleName,
	  sourceMap: 'inline'
	},
	
	customPreprocessors: {
	  rollupTests: {
		base: 'rollup',
		options: { moduleName: (moduleName+'Tests') }
	  }
	},
	
	
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['CustomElectron'],
	
	customLaunchers: {
	  CustomElectron: {
		base: 'Electron',
		require: __dirname + '/../app/background.js'
	  }
	},

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
