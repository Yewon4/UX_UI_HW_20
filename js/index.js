$(document).ready(function() {
    var defaultFontSize = '24px';
    var defaultFontColor = '#000';

    $('nav ul li a').click(function() {
        $('nav ul li a').css({
            'color': defaultFontColor,
            'font-size': defaultFontSize
        });

        $(this).css({
            'color': '#A28C8C',
            'font-size': '26px'
        });
    });
});


$(document).ready(function() {
    var navBar = $(".navBar");
    var navBarOffset = navBar.offset().top;
    var nav = $("nav");

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > navBarOffset) {
            navBar.addClass("fixed");
            navBar.css("height", "60px");
            nav.css("padding", "0");
        } else {
            navBar.removeClass("fixed");
            navBar.css("height", "auto");
            nav.css("padding", "10px 0");
        }
    });
});

$(document).ready(function() {
    // Smooth scrolling
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            var offset = 500;
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 200);
        }
    });

    // Scroll animation
    $(window).scroll(function() {
        $(".Project-title").each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass("active").fadeIn();
            }
        });

        $(".projects").each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass("active").fadeIn();
            }
        });
    });
});

$(document).ready(function() {
    // Scroll event handler
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }
    });
    
    // Click event handler for the .to-top button
    $('.to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });
});


$(document).ready(function() {
    $('.button').mouseenter(function() {
        $(this).css('background-color', '#D79D9D');
    });

    $('.button').mouseleave(function() {
        $(this).css('background-color', '#A28C8C');
    });

    $('.button').click(function() {
        $(this).css({
            'background-color': '#D79D9D',
            'border-color': '#000',
        });
    });
});

$(document).ready(function() {
    $('.socials a img').hover(function() {
        $(this).css({
            'transform': 'rotate(-10deg)',
            'transition': 'transform 0.2s ease'
        });
    }, function() {
        $(this).css({
            'transform': 'rotate(0deg)',
            'transition': 'transform 0.2s ease'
        });
    });
});

