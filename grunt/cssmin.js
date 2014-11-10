module.exports = function(grunt, options) {
    return {
        combine: {
            files: {
                'dist/styles.css': ['src/css/reset.css', 'src/css/general.css', 'src/css/header.css']
            }
        }
    };
};