module.exports = function(grunt, options) {
    return {
        'default': ['build'],
        'build': [
            'newer:htmlmin:dev',
            'newer:cssmin:combine',
            'newer:uglify:dev',
            'newer:imagemin:prod'
        ],
        'deploy': ['ftp-deploy:dev']
    };
};