module.exports = function(grunt) {

    grunt.initConfig({
      uglify: {
        options: {
        },
        main: {
          files: [
            // {
            //   expand: true,
            //   cwd: "dist/public/js",
            //   src: ["main.js", "!*.min.js"],
            //   dest: "dist/public/js",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/admin",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/admin",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/bas",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/bas",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/finance",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/finance",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/monitoring",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/monitoring",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/mutation",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/mutation",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/report",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/report",
            //   ext: ".min.js"
            // },
            // {
            //   expand: true,
            //   cwd: "dist/js/reset",
            //   src: ["*.js", "!*.min.js"],
            //   dest: "dist/js/reset",
            //   ext: ".min.js"
            // }
          ]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask("default", ["uglify"]);
  };