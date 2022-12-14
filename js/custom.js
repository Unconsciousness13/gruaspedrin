$(function() {

    // MENU
    $('.navbar-collapse a').on('click', function() {
        $(".navbar-collapse").collapse('hide');
    });

    // SMOOTHSCROLL NAVBAR
    $(function() {
        $('.navbar a, .hero-text a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });
});

// scroll to top 

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('.scrol-arrow').fadeIn();
    } else {
        $('.scrol-arrow').fadeOut();
    }
});

$('.scrol-arrow').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1300);
    return false;
});