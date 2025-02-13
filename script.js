$(document).ready(function () {
    // Проверяем, существуют ли элементы с классами .container и .card
    if ($('.container').length && $('.card').length) {
        $('.container').mouseenter(function () {
            $('.card').stop().animate({
                top: '-90px'
            }, 'slow');
        }).mouseleave(function () {
            $('.card').stop().animate({
                top: 0
            }, 'slow');
        });
    } else {
        console.error('Элементы .container или .card не найдены на странице.');
    }
});