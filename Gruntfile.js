'use strict';

var eyeglass = require("eyeglass");

module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: ['scss/*.{scss,sass}', 'Gruntfile.js', 'neelix.breakpoints.yml'],
        tasks: ['sass:dist']
      },
    },
    sass: {
      options: require("eyeglass").decorate({
        outputStyle: 'expanded'
      }),
      dist: {
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    }
  });
  grunt.registerTask('default', ['sass:dist', 'watch']);
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
