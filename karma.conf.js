// Karma configuration
// Generated on Sat May 23 2015 02:58:21 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function(config) {
	config.set({

	    // base path that will be used to resolve all patterns (eg. files,
	    // exclude)
	    basePath : '',

	    // frameworks to use
	    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	    frameworks : [
	        'mocha', 'chai'
	    ],

	    // list of files / patterns to load in the browser
	    files : [
	        // bower:js
	        'bower_components/jquery/dist/jquery.js',
	        'bower_components/jquery-ui/jquery-ui.js',
	        'bower_components/jqueryui-touch-punch/jquery.ui.touch-punch.min.js',
	        'bower_components/underscore/underscore.js',
	        'bower_components/github-api/github.js',
	        'bower_components/hello/dist/hello.all.js',
	        'bower_components/hello/src/modules/github.js',
	        // endbower

	        'app/scripts/**/*.js',
	        'test/spec/**/*.js'
	    ],

	    // list of files to exclude
	    exclude : [],

	    // test results reporter to use
	    // possible values: 'dots', 'progress'
	    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
	    reporters : [
		    'progress'
	    ],

	    // web server port
	    port : 9876,

	    // enable / disable colors in the output (reporters and logs)
	    colors : true,

	    // level of logging
	    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
	    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
	    logLevel : config.LOG_INFO,

	    // start these browsers
	    // available browser launchers:
	    // https://npmjs.org/browse/keyword/karma-launcher
	    browsers : [
		    'PhantomJS'
	    ],
	});
};
