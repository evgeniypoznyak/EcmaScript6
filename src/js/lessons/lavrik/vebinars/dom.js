const div = document.querySelector('#res');
div.innerHTML = 'CLICK ME!';

div.onclick = function () {
    div.innerHTML = 'WOW!';
    div.className = 'test';
    div.style.color = 'red';
    div.style.fontSize = '30px';
}








// Вывод всех свойств элемента DOM
/*
print_object(div.style);

function print_object(obj) {
    let res = `<ul>`;
    for (let i in obj) {
        res += `<li><b>${i}</b>: ${obj[i]}</li>`
    }
    res += `</ul>`;

    document.write(res);
}
*/
