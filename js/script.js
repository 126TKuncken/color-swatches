$(document).ready(function () {
    $('.swatch').hover(function () {
        const color = $(this).data('color');
        $(this).css('background-color', color);
    }, function () {
        $(this).css('background-color', '');
    });
    $('.swatch').click(function () {
        const newImage = $(this).data('.img/download.jpg');
        $('..img/download.jpg').attr('src', newImage);
    });
});
