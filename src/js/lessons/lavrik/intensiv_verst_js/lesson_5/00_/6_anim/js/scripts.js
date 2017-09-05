$(function () {


    $('.item').on('click', function () {
        $(this).stop(true, true).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
    });


    $('.item').on('contextmenu', function (e) {
        e.preventDefault();
        console.log(e);


        // Анимация по цепочке, по очереди
        /*
         $(this).animate({
         height: 100
         }, 500).animate({
         opacity: 0.5
         }, 500);
         */


        // анимация одновременно 
        $(this).animate({
            height: '-=100px',
            opacity: 0.5
        }, 500, $.bez([.71,.1,.33,.55]), callback);
    });

});


function callback() {
    console.log('ta-da!');
}