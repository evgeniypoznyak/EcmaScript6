let div = document.querySelector('#res');

var xDown = null;
var yDown = null;

div.addEventListener('touchstart', function(e) {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
})

div.addEventListener('touchmove', function(e) {

    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = e.touches[0].clientX;
    var yUp = e.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            console.log('left');
        } else {
            /* right swipe */
            console.log('right');
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            console.log('up');
        } else {
            /* down swipe */
            console.log('down');
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;


})