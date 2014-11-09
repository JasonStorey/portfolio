module.exports = function(grunt, options) {
    return {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                'dist/index.html': 'src/html/index.html'
            }
        },
        dev: {
            files: {
                'dist/index.html': 'src/html/index.html'
            }
        }
    };
};