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
				}

			});

	// load
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// register
	grunt.registerTask('default', [ 'uglify' ]);
};