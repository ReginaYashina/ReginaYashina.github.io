function theRotator() {
    $('.main-screen__img_change-left, .main-screen__img_change-right, .main-screen__title_change').css({ opacity: 0.0 });
    $('.main-screen__img_change-left:first, .main-screen__img_change-right:first, .main-screen__title_change:first').css({ opacity: 1.0 });
    setInterval('rotate()', 5000);
}

function rotate() {
    let current_left = ($('.main-screen__img_change-left.show') ? $('.main-screen__img_change-left.show') : $('.main-screen__img_change-left:first'));
    let current_right = ($('.main-screen__img_change-right.show') ? $('.main-screen__img_change-right.show') : $('.main-screen__img_change-right:first'));
    let current_title = ($('.main-screen__title_change.show') ? $('.main-screen__title_change.show') : $('.main-screen__title_change:first'));
    let next_left = ((current_left.next().length) ? ((current_left.next().hasClass('show')) ? $('.main-screen__img_change-left:first') : current_left.next()) : $('.main-screen__img_change-left:first'));
    let next_right = ((current_right.next().length) ? ((current_right.next().hasClass('show')) ? $('.main-screen__img_change-right:first') : current_right.next()) : $('.main-screen__img_change-right:first'));
    let next_title = ((current_title.next().length) ? ((current_title.next().hasClass('show')) ? $('.main-screen__title_change:first') : current_title.next()) : $('.main-screen__title_change:first'));

    next_left.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current_left.animate({ opacity: 0.0 }, 1000)
        .removeClass('show');

    next_right.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current_right.animate({ opacity: 0.0 }, 1000)
        .removeClass('show');

    next_title.css({ opacity: 0.0 })
        .addClass('show')
        .animate({ opacity: 1.0 }, 1000);

    current_title.animate({ opacity: 0.0 }, 1000)
        .removeClass('show');
}


$(document).ready(function () {
    theRotator();









})