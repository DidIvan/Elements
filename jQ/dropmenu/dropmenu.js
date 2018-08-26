$(document).ready(function () {
    $('#slow_nav  ul li').hover( function () {
            $('.dropdown', this).stop().slideDown(400);
        },
        function () {
            $('.dropdown', this).stop().slideUp(400);
        }
    );
});