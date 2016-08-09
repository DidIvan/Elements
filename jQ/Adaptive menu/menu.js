/**
 * Created by Horbynko on 09.08.2016.
 */
$(document).ready(function () {
   $('.menu-trigger').on('click',function () {
       $('nav li').slideToggle(500)
   });
    /*after using slidetoggle - necessary to remove style ="display:none"*/
    $(window).resize(function () {
        $('nav li').removeAttr('style')
    })
});