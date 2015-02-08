module.exports = function(grunt) {
	// Project configuration.
	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				uglify : {
					options : {
						banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
					},
					build : {
						src : 'src/<%= pkg.name %>.js',
						dest : 'build/<%= pkg.name %>.min.js'
					}
				},
				jasmine : {
					player : {
						src : 'src/**/*.js',
						options : {
							specs : 'spec/*Spec.js',
							helpers : 'spec/*Helper.js',
							outfile: 'spec/reports/_SpecRunner.html',
							keepRunner: 'true',  // keep SpecRunner/outfile file
							template: require('grunt-template-jasmine-istanbul'),
							templateOptions: {
								coverage: 'spec/reports/coverage.json',
								report: [
									{
										type: 'html',
										options: {
											dir: 'spec/reports/html'
										}
									},
									{
										type: 'cobertura',
										options: {
											dir: 'spec/reports/cobertura'
										}
									},
									{
										type: 'text-summary'
									}
								]
							}
						}
					}
				}

			});

	// load
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	// register
	grunt.registerTask('default', [ 'uglify','jasmine' ]);
};