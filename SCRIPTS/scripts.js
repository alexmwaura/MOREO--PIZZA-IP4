$(function () {
    var bodyEl = $('body'),
        navToggleBtn = bodyEl.find('.nav-toggle-btn');

    navToggleBtn.on('click', function () {
        bodyEl.toggleClass('active-nav');

        event.preventDefault();
    });
});
