module.exports = function(grunt, options) {
    return {
        'default': ['build'],
        'build': [
            'htmlmin:dev',
            'cssmin:combine',
            'uglify:dev',
            'imagemin:prod'
        ]
    };
};