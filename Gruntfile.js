module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Clean the dist folder before build
    clean: {
      build: ['dist']
    },

    // Copy public assets to dist folder
    copy: {
      main: {
        expand: true,
        cwd: 'public/',
        src: '**',
        dest: 'dist/',
      },
    },

    // Run shell commands (Vite build)
    shell: {
      viteBuild: {
        command: 'npm run build'
      }
    }
  });

  // Load required plugins
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  // Default task: clean, copy, build
  grunt.registerTask('default', ['clean', 'copy', 'shell:viteBuild']);
};
