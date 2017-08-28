
let links = document.querySelectorAll('a[target=_blank]');
let images = document.querySelectorAll('.gallery img');


for (let i = 0; i < links.length; i++){
    links[i].onclick = confirmAway;
}


function confirmAway(e) {
    if (!confirm('Куда ты идешь?')) {
        return false;
    }
    else {
        console.log('poop');
        return false;
    }
}

images.forEach(function (image){

    // чтобы мышкой нельзя было сдвинуть-сохранить изображение
   image.onmousedown = stopMove;
   // чтобы правое меню не открывалось на картинке
   image.oncontextmenu = stopMove;
})

function stopMove() {
    return false;
}