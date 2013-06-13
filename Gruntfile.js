module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		mocha_phantomjs: {
			browser: {
				src: ['test/**/*.html'],
				options: {
					reporter: 'spec'
				}
			},
			
			jenkins: {
				src: ['test/**/*.html'],
				options: {
					reporter: 'xunit',
					output: 'results/xunit.xml'
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-mocha-phantomjs');
	
	grunt.registerTask('default', ['mocha_phantomjs:browser']);
	grunt.registerTask('test', ['mocha_phantomjs:jenkins']);
};