/**
 * Created by Horbynko on 09.08.2016.
 */
$(document).ready(function () {
    $('.menu-trigger').on('click', function () {
        $('nav li').slideToggle(500)
    });
    /*after using slidetoggle - necessary to remove style ="display:none";
    as an alternative we can write down this string in style.css -
    @media (min-width: 501px) { nav ul { display: block !important; } }﻿*/
    $(window).resize(function () {
        if ($(window).width() > 500) {
            $('nav li').removeAttr('style')
        }
    })
});