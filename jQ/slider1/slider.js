/**
 * Created by Ivan on 07.08.2016.
 */
$(document).ready(function () {
    /*создаем переменную - ширина контейнера*/
    var width = $('#slider-container').width();
    /*присвоим ширину слайдам*/
    $('.slides>li').width(width);
    /*делаем ширину списка достаточной чтоб он уместил все елементы списка,
     * для этого ширину слайда умножаем на количество слайдов*/
    $('.slides').width(width * $('.slides>li').length);

    /*positioning
     * смещаем список влево на ширину одного слайда*/
    $('.slides').css('left', -width);

    /*помещаем последний слайд в начало списка*/
    $('.slides>li:last-child').prependTo('.slides');

    /*move slides forward*/
    function nextSlide() {
        /*смещаем влево весь список на ширину слайда*/
        $('.slides').animate({
            'margin-left': -width
        }, 500, function () {
            $('.slides>li:first-child').appendTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }

    function prevSlide() {
        /*смещаем влево весь список на ширину слайда*/
        $('.slides').animate({
            'margin-left': width
        }, 500, function () {
            $('.slides>li:last-child').prependTo('.slides');
            $('.slides').css('margin-left', 0);
        });
    }

    /*controls*/
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
})
