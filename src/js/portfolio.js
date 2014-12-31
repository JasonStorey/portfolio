window.PORTFOLIO = (function portfolio(window, $) {
    var $display,
        $navigationContainer,
        currentProject;

    function init(config) {
        var currentProjectHash = getCurrentProjectHash(),
            nextProject = config.projects[0];

        $display = $(config.displayContainerSelector);

        setupNavigation(config);

        if(currentProjectHash.length > 0) {
            config.projects.forEach(function(project) {
                if(project.hash === currentProjectHash) {
                    nextProject = project;
                }
            });
        }

        switchProject(nextProject);
    }

    function setupNavigation(config) {
        $navigationContainer = $(config.navigationContainerSelector);
        config.projects.forEach(createNavForProject);
    }

    function createNavForProject(project) {
        var $navigation = $('<div>').addClass('nav-item nav-item-' + project.id + ' clearfix'),
            $thumb = $('<a>').addClass('thumbnail'),
            $thumbImg = $('<img>'),
            $deets = $('<div>').addClass('details'),
            $title = $('<h3>'),
            $clickThrough = $('<a>' + project.name + '</a>'),
            $description = $('<span>' + project.description + '</span>').addClass('description');

        $thumbImg.attr({
            src: project.thumbnailUrl,
            alt: project.name,
            title: project.name
        });

        $thumb.on('click', function() {
            switchProject(project);
        });

        $thumb.append($thumbImg);

        $clickThrough.attr({
            href: project.link,
            title: project.link,
            alt: project.link,
            target: '_blank'
        });

        $title.append($clickThrough);
        $deets.append($title);
        $deets.append($description);

        $navigation.append($thumb);
        $navigation.append($deets);

        $navigationContainer.append($navigation);
    }

    function switchProject(project) {
        if(currentProject === project) {
            return;
        }

        window.location.hash = '#/' + project.hash;
        displayProject(project);
        currentProject = project;
    }

    function displayProject(project) {
        var $iframe = $('<iframe>');

        $navigationContainer.find('.selected').removeClass('selected');
        $('.nav-item-' + project.id).addClass('selected');
        $display.empty();

        $iframe.attr({
            src: project.embedUrl
        });

        $display.append($iframe);
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