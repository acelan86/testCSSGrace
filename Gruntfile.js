module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    postcss: {
      options: {
        processors: [
          require('cssgrace')
        ]
      },
      dist: {
        src: ['src/test.css'],
        dest: 'release/test.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['postcss']);
}