$(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();
        
        $('.menu a').removeClass('active').filter(this).addClass('active');
        
        var selector = $(this).attr('href'); /* #about - строка */
        var h = $(selector); /* jquery-элемент заголовка */
        
        $('html, body').stop().animate({
            scrollTop: h.offset().top - 70
        }, 1400,);
        
        
    });



});
