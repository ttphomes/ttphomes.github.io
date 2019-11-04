/*
|------------------------------------------------------------------------------
| Gruntfile
|------------------------------------------------------------------------------
|
|   Build tool
|
*/

module.exports = function (grunt)
{
    /*
    |--------------------------------------------------------------------------
    | Configuration
    |--------------------------------------------------------------------------
    */
    
    var config = {
        
        copy: {
            
            vendor: {
                
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/jquery/dist/jquery.min.js',
                            'node_modules/jquery/dist/jquery.min.map'
                        ],
                        dest: 'dist/js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/bootstrap/dist/js/bootstrap.min.js',
                            'node_modules/bootstrap/dist/js/bootstrap.min.js.map'
                        ],
                        dest: 'dist/js/',
                        filter: 'isFile'
                    }
                ],
                
            }
            
        },
        
        pug: {
            options: {
                pretty: true,
            },
            release: {
                files: {
                    'index.html': 'src/pug/index.pug'
                }
            }
        },
        
        sass: {
            dist: {
                files: {
                    'dist/css/app.css': 'src/scss/app.scss'
                }
            }
        },
        
        watch: {
            styles: {
                files: 'src/scss/**/*.scss',
                tasks: [ 'css' ]
            },
            pug: {
                files: 'src/pug/**/*.pug',
                tasks: [ 'html' ]
            }
        },
        
    };
    
    grunt.config.init(config);
    
    /*
    |--------------------------------------------------------------------------
    | Load packages
    |--------------------------------------------------------------------------
    */
    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    /*
    |--------------------------------------------------------------------------
    | Register tasks
    |--------------------------------------------------------------------------
    */
    
    grunt.registerTask('html', [
        'pug'
    ]);
    
    grunt.registerTask('assets', [
        'copy:vendor'
    ]);
    
    grunt.registerTask('css', [
        'sass'
    ]);
    
}
