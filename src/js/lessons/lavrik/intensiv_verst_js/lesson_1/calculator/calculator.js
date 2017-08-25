const btn = document.querySelector('input[name=calc]');
const num1 = document.querySelector('input[name=num1]');
const num2 = document.querySelector('input[name=num2]');
const res = document.querySelector('.res');

btn.onclick = function () {
    res.innerText = parseInt(num1.value) + num2.value*1;
}