module.exports = function(grunt, options) {
    return {
        dev: {
            files: {
                'dist/index.html': 'src/html/index.html'
            }
        },
        prod: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                'dist/index.html': 'src/html/index.html'
            }
        }
    };
};