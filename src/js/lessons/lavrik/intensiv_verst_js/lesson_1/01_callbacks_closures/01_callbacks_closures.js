window.onload = function () {
    const items = document.querySelectorAll('.items .item');
    const sum = document.querySelector('#res');

    items.forEach(item => {
        item.onclick = activeItem;
         /*item.onclick = function(){ activeItem.call(item); }*/

    });

    function activeItem() {
        this.classList.toggle('red');
        const total = document.querySelectorAll('.red');
        let totalPrice = 0;
        total.forEach(v => {
            totalPrice += parseInt(v.getAttribute('data-price'));
        })
        sum.innerText = totalPrice;
    }


}


