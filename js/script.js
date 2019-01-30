"use strict";

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $('#about').hide();
    
    $('header').on('click', function () {
        window.scrollTo(0,0); 
    });

    $('#work-left').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.floralist-container').offset().top
        }, 1000);
    });

    $('#learn-more').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#floralist-2").offset().top
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

    var x = window.matchMedia('(max-width: 1100px)');
    mediaQueries(x);

    function mediaQueries(x) {
        if (x.matches) { // If media query matches
            $('#learn-more').hide();
            $('#work-right-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#towers').offset().top
                }, 1000);
            });
            $('#work-right-mid').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#ttt').offset().top
                }, 1000
                );
            });
            $('#work-right-bot').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#cart').offset().top
                }, 1000);
            });
        } else{
            $('#work-right-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#other-work').offset().top
                }, 1000);
            });
            $('#work-right-mid').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#other-work').offset().top
                }, 1000
                );
            });
            $('#work-right-bot').on('click', function () {
                $('html, body').animate({
                    scrollTop: $('#other-work').offset().top
                }, 1000);
            });
        }
    }

    x.addListener(mediaQueries);
});