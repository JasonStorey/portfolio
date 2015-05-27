module.exports = function(grunt, options) {
    var destination = '/staging';

    if(grunt.option('prod')) {
        destination = '/';
    }

    return {
        dev: {
            auth: {
                host: 'ftp.sellthyself.com',
                port: 21,
                authPath: './.ftppass',
                authKey: 'jasonstorey'
            },
            src: './dist',
            dest: destination,
            exclusions: []
        }
    };
};