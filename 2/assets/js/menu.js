$(document).ready(function () {
    $('.header__burger').click(function () {
$('.header__burger, .header__burger-line, .header__menu, .header__menu-mobile, .header__description, .header__contacts, .header__body, .header__logo, .header__logo>img').toggleClass('active');
$('.page').toggleClass('lock');
    });
});