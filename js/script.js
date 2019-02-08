"use strict";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    console.log("hello world");
    $('#about').hide();
    $('header').on('click', function () {
        window.scrollTo(0,0); 
    });
    $('#work-left').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.floralist-container').offset().top
        }, 1000);
        return false;
    });
    $('#learn-more').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#floralist-2").offset().top
        }, 1000);
        return false;
    });
    $('nav a').click(function () {
        console.log("Clicked!");
        $('nav a').removeClass('active');
        $(this).addClass('active');
    });
    $('#nav-about').click(function () {
        console.log("Clicked!");
        $('#work').hide();
        $('#about').show(function(){
            window.scrollTo(0, 0);
        });
    });
    $('#nav-work').click(function () {
        console.log("Clicked!");
        $('#about').hide();
        $('#work').show(function(){
            window.scrollTo(0, 0);
        });
    });
    $('#work-right-top').on('click', function () {
        console.log("in if");
        $('html, body').animate({
            scrollTop: $('#towers').offset().top
        }, 500);
        console.log("post if animate");
        return false;   
    });
    $('#work-right-mid').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#ttt').offset().top
        }, 500
        );
        return false;
    });
    $('#work-right-bot').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#cart').offset().top
        }, 500);
        return false;
    });
});