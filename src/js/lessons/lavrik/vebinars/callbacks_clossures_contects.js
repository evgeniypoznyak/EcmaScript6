window.onload = function () {

    var items = document.querySelectorAll('.items .item');

    items.forEach(item => {
        item.onclick = activeItem.bind(item);
    });

    function activeItem() {
        this.classList.toggle('red');
    }

/*    setInterval(function () {
     let rand = mtRand(0, items.length - 1);
     activeItem.call(items[rand]);
     //   items[rand].classList.toggle('red');
      //  console.log(rand);
    }, 500);*/

    function mtRand(min, max) {
        return Math.floor(Math.random() * (max - min + 1));
    }











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


