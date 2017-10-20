module.exports = function(grunt) {
	grunt.initConfig({
		babel: {
      options: {
				sourceMap: false,
				presets: ['env']
      },
      dev: {
				files: [{
						expand: true,
						cwd: 'components',
						src: ['*.js'],
						dest: 'js',
						ext: '.js'
				}]
			}
		},
	  connect: {
	    server: {
	      options: {
	        port: 8000,
	        hostname: 'localhost',
	        base:'.',
					keepalive: true,
	        open: true
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('serve', ['babel:dev', 'connect:server']);
};