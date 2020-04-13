module.exports = function (grunt) {
    grunt.initConfig({
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'WORKING/images/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'img/'
                }]
            }
        },
        uglify: {

        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/main.css': 'WORKING/stylesheets/main.scss',       // 'destination': 'source'
                    'css/error.css': 'WORKING/stylesheets/error.scss'
                }
            }
        },
        autoprefixer: {
            options:{
                browsers: [
                    'last 2 versions',
                    'ie >= 9',
                    'Android >= 2.3',
                    'ChromeAndroid > 20',
                    'FirefoxAndroid > 20',
                    'iOS >= 8'
                ]
            },
            dist: {
                files: {
                    'css/main.css': 'css/main.css',
                    'css/error.css': 'css/error.css',
                }
            }
        },
        cssmin : {
            styles : {
                src : "css/styles.css",
                dest : "css/styles.min.css"
            },
            error_styles : {
                src : "css/error-styles.css",
                dest : "css/error-styles.min.css"
            }
        },
        stripCssComments: {
            dist: {
                files: {
                    'css/main.css': 'css/main.css',
                    'css/error.css': 'css/error.css',
                }
            }
        },
        watch: {
            styles: {
                files: ['stylesheets/main.scss', 'stylesheets/error.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-strip-css-comments');

    grunt.registerTask('deploy', ['sass', 'autoprefixer', 'imagemin', 'cssmin']);
    grunt.registerTask('default', ['sass', 'autoprefixer', 'imagemin', 'stripCssComments']);
};