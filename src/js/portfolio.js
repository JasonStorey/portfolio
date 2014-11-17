window.portfolio = (function portfolio(window, $) {
    var $display,
        $thumbsContainer,
        currentProject;

    function init(config) {
        $display = $(config.displayContainerSelector);

        setupThumbnails(config);
        displayProject(config.projects[0]);
    }

    function setupThumbnails(config) {
        $thumbsContainer = $(config.thumbnailContainerSelector);

        config.projects.forEach(function(project) {
            var $thumb = $('<a>'),
                $thumbImg = $('<img>');

            $thumbImg.attr({
                src: project.thumbnailUrl,
                alt: project.name,
                title: project.name
            });

            $thumb.addClass('thumbnail thumbnail_' + project.id);

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

        $thumbsContainer.find('.selected').removeClass('selected');
        $('.thumbnail_' + project.id).addClass('selected');
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