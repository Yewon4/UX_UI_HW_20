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

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > navBarOffset) {
            navBar.addClass("fixed");
        } else {
            navBar.removeClass("fixed");
        }
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
    $('.resume').mouseenter(function() {
        $(this).css('background-color', '#D79D9D');
    });

    $('.resume').mouseleave(function() {
        $(this).css('background-color', '');
    });

    $('.resume').click(function() {
        $(this).css({
            'background-color': '#D79D9D',
            'border-color': '#000',
            'text-color': '#fffff',
            'border-width': '1px'
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