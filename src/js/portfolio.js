window.portfolio = (function portfolio(window, $) {
    function init(config) {
        setupThumbnails(config);
    }

    function setupThumbnails(config) {
        var $thumbsContainer = $(config.thumbnailContainerSelector);

        config.projects.forEach(function(project) {
            var $thumb = $('<a>'),
                $thumbImg = $('<img>');

            $thumbImg.attr({
                src: project.thumbnailUrl,
                alt: project.name,
                title: project.name
            });

            $thumb.addClass('thumbnail');

            $thumb.on('click', function() {
                window.console.log(project);
            });

            $thumb.append($thumbImg);
            $thumbsContainer.append($thumb);
        });
    }

    return {
        init: init
    };

}(window, window.jQuery));