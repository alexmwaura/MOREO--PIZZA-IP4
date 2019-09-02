$(function () {
    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');

    navToggleBtn.on('click', function () {
        bodyEl.toggleClass('active-nav');

        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#W").click(function () {
        $(".img1").toggle(1000);
        $(".p1").toggle(1000);


    });
    $("#development").click(function () {
        $(".img2").toggle(1000);
        $(".p2").toggle(1000);
    });
    $("#productmanagement").click(function () {
        $(".img3").toggle(1000);
        $(".p3").toggle(1000);
    });

});
