(function($) {
    var $win = $(window),
        $body = $('body'),
        $nav = $("#nav");
    
    // Define website breakpoints
    breakpoints({
        xlarge:  [ '1281px',  '1680px' ],
		large:   [ '981px',   '1280px' ],
		medium:  [ '737px',   '980px'  ],
		small:   [ '361px',   '736px'  ],
		xsmall:  [ null,      '360px'  ]
    });

    // Pre load animations, possibly?
    $win.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass("preload");
        }, 100);
    });

    // Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		speed: 300,
		alignment: 'center'
    });
    
    // Navigation
    // Title Bar.
    $(
        '<div id="titleBar">' +
            '<a href="#navPanel" class="toggle"></a>' +
            '<span class="title">INSEKTIONEN</span>' +
        '</div>'
    )
        .appendTo($body);

    // Panel.
    $(
        '<div id="navPanel">' +
            '<nav>' +
                $('#nav').navify() +
            '</nav>' +
        '</div>'
    )
        .appendTo($body)
        .toPanel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'left',
            target: $body,
            visibleClass: 'navPanel-visible'
        });

})(jQuery);