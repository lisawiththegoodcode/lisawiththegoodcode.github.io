"use strict";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $('#about').hide();
    // $('#floralist').hide();

    $('#work-left').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $("#floralist").offset().top
        }, 1000);
    });

    $('nav a').click(function () {
        console.log("Clicked!");
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('#nav-about').click(function () {
        console.log("Clicked!");
        $('#work').hide();
        $('#floralist').hide();
        $('#other-work').hide();
        $('#about').show();
    });

    $('#nav-work').click(function () {
        console.log("Clicked!");
        $('#about').hide();
        $('#work').show();
    });

    $('#grid-left').click(function () {
        $('#grid-right-top').hide(1000);
        $('#grid-right-mid').hide(1000);
        $('#grid-right-bot').hide(1000);
        $('#work').append("<h1>Floralist</h1>");
    });

});