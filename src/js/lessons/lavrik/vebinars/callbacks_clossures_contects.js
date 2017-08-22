window.onload = function () {

    var items = document.querySelectorAll('.items .item');

    items.forEach(item => {
        item.onclick = activeItem.bind(item);
    });

    function activeItem() {
        this.classList.toggle('red');
        fade(this, 1000, function () {
            this.style.display = 'none';
            console.log('poop');
            console.log(this);
        })
    }


    function fade(elem, t, f) {
        var fps = 50;
        var time = t || 500;
        var steps = time / fps;
        var op = 1;
        var d0 = op / steps;

        var callback = f || function () {
        }
        
        var timer = setInterval(function () {
            op -= d0;
            elem.style.opacity = op;
            steps--;
            if (steps === 0) {
                clearInterval(timer);
                callback.call(elem);
            }
        }, 1000 / fps)
    }


/*
    function mtRand(min, max) {
        return Math.floor(Math.random() * (max - min + 1));
    }
    */

    /*    setInterval(function () {
         let rand = mtRand(0, items.length - 1);
         activeItem.call(items[rand]);
         //   items[rand].classList.toggle('red');
          //  console.log(rand);
        }, 500);*/
    /*    document.querySelector('.items').addEventListener('click', function () {
    this.classList.toggle('red');
})*/

    /*    document.querySelector('.items .item').onclick = function () {
            this.parentNode.classList.toggle('red');
        }*/
    /* for (var i = 0; i < items.length; i++){
        items[i].onclick = activeItem;
    }*/


// setInterval(activeItem.bind(this), 500);


    /* item.onclick = function (){
         console.log(item);
       //  this.parentNode.classList.toggle('red');
     }*/


//  let cal =  activeItem.bind(item);
    // cal();


    /*
        var div = document.querySelector('.items .item');

        var timer = new Timer(60, div)

       // setInterval(timer.tick.bind(timer), 1000)

    /!*    setInterval(function(){
            timer.tick();
        }, 1000)*!/

        setInterval( e => timer.tick(), 1000)


        function Timer(time, elem) {

            this.elem = elem;
            this.time = time;

            this.tick = function () {
                this.time--;
                this.elem.innerHTML = this.time;
                if (this.time === 0) {
                this.time = 60
                }
            }


        }


        */


}


