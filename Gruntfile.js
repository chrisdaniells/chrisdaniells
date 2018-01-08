module.exports = function(grunt) {
        
    grunt.initConfig({
        // Compilation Tools
        sass: {
            default: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'public/css/runcmd.min.css': 'src/scss/main.scss'
                }
            },
        },
    });
    
    // Load Packages
    grunt.loadNpmTasks('grunt-sass');
    
    // Grunt Tasks
    grunt.registerTask('default', [
        'sass',
    ]);
};