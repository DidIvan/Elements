/**
 * Created by Ivan on 07.08.2016.
 */
$(document).ready(function () {

    $('.slides li:last-child').prependTo('.slides');
    var step = $('.slides li').outerWidth()
    $('.next').click(function () {
        $('.slides').animate({
            'left': -step
        }, 'slow', function () {
            $('.slides li:first-child').appendTo('.slides');
            $('.slides').css('left', 0);
        });
    });

    $('.prev').click(function () {
        $('.slides').animate({
            'left': step
        }, 'slow', function () {
            $('.slides li:last-child').prependTo('.slides');
            $('.slides').css('left', 0);
        });
    });

    $('.overflow').click(function () {
        $('.frame-clone').toggleClass('off');
    });

    $('.first_st').click(function () {
        $('.slides').animate({
            'left': -step
        }, 'slow');
    });

    $('.second_st').click(function () {
        $('.slides li:first-child').appendTo('.slides');
    });
    $('.third_st').click(function () {
        $('.slides').css('left', 0);
    });
});

$('.slides li').draggable({
    revert: true
});


