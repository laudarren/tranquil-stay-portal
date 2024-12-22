module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Default task
  grunt.registerTask('default', function () {
    grunt.log.writeln('Grunt is running!');
  });
};
