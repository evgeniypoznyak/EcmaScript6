window.onload = function () {
    const items = document.querySelectorAll('.items .item');

    items.forEach(item => {
        item.onclick = activeItem.bind(item);
    });

    function activeItem() {
        this.classList.toggle('red');
        const total = document.querySelectorAll('.red');
        let totalPrice = [];
        total.forEach(v => {
            totalPrice.push(v.getAttribute('data-price'));
        })
        let res = totalPrice.reduce((total, item) => {
            return total + item * 1;
        }, 0)
        const sum = document.querySelector('#res');
        sum.innerText = res;

    }


}


