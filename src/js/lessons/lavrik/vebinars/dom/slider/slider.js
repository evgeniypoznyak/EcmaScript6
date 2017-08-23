const btnPrev = document.querySelector('#gallery .buttons .prev');
const btnNext = document.querySelector('#gallery .buttons .next');
const images = document.querySelectorAll('#gallery .photos img');
let i = 0;

function run(){
    images[i].className = '';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = 'showed';
}

//setInterval(run, 2000)



btnPrev.onclick = function () {
    images[i].className = '';
    i--;
    if (i < 0) {
        i = images.length -1;
    }
    images[i].className = 'showed';
}

btnNext.onclick = function () {


    images[i].className = '';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = 'showed';
}