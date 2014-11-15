window.portfolio = (function portfolio(window, $) {
    var $display,
        currentProject;

    function init(config) {
        $display = $(config.displayContainerSelector);

        setupThumbnails(config);
        displayProject(config.projects[0]);
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
                displayProject(project);
            });

            $thumb.append($thumbImg);
            $thumbsContainer.append($thumb);
        });
    }

    function displayProject(project) {
        var $iframe = $('<iframe>');

        if(currentProject === project) {
            return;
        }

        window.console.log(project);

        $display.empty();

        $iframe.attr({
            src: project.embedUrl
        });

        $display.append($iframe);
        currentProject = project;
    }

    return {
        init: init
    };

}(window, window.jQuery));