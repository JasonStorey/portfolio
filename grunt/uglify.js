module.exports = function(grunt, options) {
    return {
        dev: {
            files: {
                'dist/portfolio.js': ['./src/js/portfolio.js']
            }
        }
    };
};