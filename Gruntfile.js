module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		watch: {
			browser: {
				files: [
					'src/**/*.js',
					'src/*.js',
					'test/spec/**/*.js',
					'test/spec/*.js'
				],
				
				tasks: 'mocha_phantomjs:browser'
			}
		},
		
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
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['mocha_phantomjs:browser']);
	grunt.registerTask('test', ['mocha_phantomjs:jenkins']);
};