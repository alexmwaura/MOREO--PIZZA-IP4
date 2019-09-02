$(function () {
    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');

    navToggleBtn.on('click', function () {
        bodyEl.toggleClass('active-nav');

        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#work1").click(function () {
        $(".img-fluid-1").toggle(1000);
        $(".p1").toggle(1000);


    });
    $("#work1").click(function () {
        $(".img-fluid-1").toggle(1000);
        $(".p1").toggle(1000);

});
