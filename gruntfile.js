module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dev/css/',
                    src: ['*.css'],
                    dest: 'public/css/'
                }]
            }
        },
        uglify: {
            options: {
                manage: false
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dev/js/',
                    src: ['*.js'],
                    dest: 'public/js/'
                }]
            }
        },
        // babel: {
        //     options: {
        //         sourceMap: true,
        //     },
        //     dist: {
        //         files: {
        //             'dist/js/script.js': 'dev/js/script.js'
        //         }
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-babel');
    // grunt.registerTask('default', ['cssmin', 'babel', 'uglify']);
};