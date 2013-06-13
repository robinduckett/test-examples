module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jasmine: {
			browser: {
				src: ['src/**/*.js'],
				
				options: {
					specs: 'test/**/*.js',
					version: '1.3.1'
				}
			},
			
			jenkins: {
				src: ['src/**/*.js'],
				
				options: {
					specs: 'test/**/*.js',
					version: '1.3.1',
					junit: {
						path: 'results',
						consolidate: true
					}
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	
	grunt.registerTask('default', ['jasmine:browser']);
	grunt.registerTask('test', ['jasmine:jenkins']);
};