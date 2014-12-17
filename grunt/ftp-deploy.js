module.exports = function(grunt, options) {
    return {
        dev: {
            auth: {
                host: 'ftp.sellthyself.com',
                port: 21,
                authPath: './.ftppass',
                authKey: 'jasonstorey'
            },
            src: './dist',
            dest: '/staging',
            exclusions: []
        }
    };
};