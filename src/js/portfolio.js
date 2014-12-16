window.portfolio = (function portfolio(window, $) {
    var $display,
        $thumbsContainer,
        currentProject;

    function init(config) {
        var currentProjectHash = getCurrentProjectHash(),
            nextProject = config.projects[0];

        $display = $(config.displayContainerSelector);

        setupThumbnails(config);

        if(currentProjectHash.length > 0) {
            config.projects.forEach(function(project) {
                if(project.hash === currentProjectHash) {
                    nextProject = project;
                }
            });
        }

        displayProject(nextProject);
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
                switchProject(project);
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

        $thumbsContainer.find('.selected').removeClass('selected');
        $('.thumbnail_' + project.id).addClass('selected');
        $display.empty();

        $iframe.attr({
            src: project.embedUrl
        });

        $display.append($iframe);
        currentProject = project;
    }

    function switchProject(project) {
        window.location.hash = '#/' + project.hash;
        displayProject(project);
    }

    function getCurrentProjectHash() {
        var projectHash = '';

        try {
            projectHash = window.location.hash.match(/#\/([\w-]+)/i)[1];
        } catch (e) {}

        return projectHash;
    }

    return {
        init: init,
        switchProject: switchProject
    };

}(window, window.jQuery));