$(document).ready(function () {
    var link = $('.menu-link');
    var menu = $('.menu');
    var nav_link = $('.menu a');
    //по клику добавляем новый класс
    link.click(function () {
        link.toggleClass('menu-link_active');
        //выезжает меню
        menu.toggleClass("menu_active")
    });

    //скидываем добавленые классы
    nav_link.click(function () {
        link.toggleClass('menu-link_active');
        menu.toggleClass("menu_active")
    })
});