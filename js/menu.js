$(".menu-button").click(function (event) {
    event.stopPropagation();
    $(".menu-list").slideToggle("slow");
});

$(".second-menu").click(function (event) {
    $(".second-menu-list").slideToggle("slow");
    event.stopPropagation();
});

$("body").click(function () {
    if ($( document ).width() <= 1200) {
    $(".menu-list").slideUp("slow");
    $(".second-menu-list").slideUp("slow");
    } else {
        $(".second-menu-list").slideUp("slow");
    }
});

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 70) {
        $("nav").addClass("small-nav");
    } else {
        $("nav").removeClass("small-nav");
    }
});

$('.scroll').click(function(event) {
    event.preventDefault();
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000 );
});