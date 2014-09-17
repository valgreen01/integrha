module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          //compress: true,
          //yuicompress: true,
          //optimization: 2
        },
        files: {
          // target.css file: source.less file
          "public/css/styles.css": "src/less/styles.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['src/less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.registerTask('default', ['watch']);
};