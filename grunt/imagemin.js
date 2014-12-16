module.exports = function(grunt, options) {
    return {
        prod: {
            options: {
                optimizationLevel: 3
            },
            files: [{
                expand: true,
                cwd: 'assets/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/'
            }]
        }
    };
};