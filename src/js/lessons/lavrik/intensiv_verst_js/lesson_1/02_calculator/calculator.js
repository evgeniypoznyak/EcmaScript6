const btn = document.querySelector('input[name=calc]');
const num1 = document.querySelector('input[name=num1]');
const num2 = document.querySelector('input[name=num2]');
const res = document.querySelector('.res');

// onchange отработает, только когда фокус пропадает
num1.oninput = btnEnable;

// onchange отработает, только когда фокус пропадает
num2.oninput = btnEnable;

function btnEnable() {
    btn.disabled = false;
};

btn.onclick = function () {
    res.innerText = parseInt(num1.value) + num2.value*1;
    this.disabled = true;
};
