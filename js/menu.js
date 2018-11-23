$(".menu-button").click(function (event) {
    $(".menu-list").toggleClass("hide");
    event.stopPropagation();
});

$("body").click(function () {
    $(".menu-list").addClass("hide");
});

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 70) {
        $("nav").addClass("small-nav");
    } else {
        $("nav").removeClass("small-nav");
    }
});
