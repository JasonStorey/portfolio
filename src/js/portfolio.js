window.PORTFOLIO = (function portfolio(window, $) {
    var $display,
        $navigationContainer,
        $displayIframe,
        currentProject;

    function init(config) {
        var currentProjectHash = getCurrentProjectHash();

        setupDisplay(config);
        setupNavigation(config);

        if(currentProjectHash.length > 0) {
            config.projects.forEach(function(project) {
                if(project.hash === currentProjectHash) {
                    switchProject(project);
                }
            });
        }
    }

    function setupDisplay(config) {
        var $closeButton = createCloseButton();

        $closeButton.click(function() {
            reset();
        });

        $display = $(config.displayContainerSelector);
        $display.append($closeButton);
    }

    function setupNavigation(config) {
        $navigationContainer = $(config.navigationContainerSelector);
        config.projects.forEach(createNavForProject);
    }

    function createCloseButton() {
        var $closeButton = $('<a>'),
            $x = $('<span>'),
            $b1 = $('<b>'),
            $b2 = $('<b>'),
            $b3 = $('<b>'),
            $b4 = $('<b>');

        $closeButton.addClass('display-close-button');
        $x.addClass('x');
        $x.append($b1);
        $x.append($b2);
        $x.append($b3);
        $x.append($b4);
        $closeButton.append($x);

        return $closeButton;
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

    function reset() {
        currentProject = undefined;
        window.location.hash = '';
        $navigationContainer.find('.selected').removeClass('selected');
        $displayIframe.remove();
        $display.removeClass('visible');
    }

    function displayProject(project) {
        $displayIframe = $('<iframe>');

        $navigationContainer.find('.selected').removeClass('selected');
        $('.nav-item-' + project.id).addClass('selected');
        $displayIframe.remove();

        $displayIframe.attr({
            src: project.embedUrl
        });

        $display.append($displayIframe);
        $display.addClass('visible');
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
