module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: { build: ['dist'] },
    copy: { main: { expand: true, cwd: 'public/', src: '**', dest: 'dist/' } },
    shell: { viteBuild: { command: 'npm run build' } }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['clean', 'copy', 'shell:viteBuild']);
};
