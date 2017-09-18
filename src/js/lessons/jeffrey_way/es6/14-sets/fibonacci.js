function fib(a, b, n) {
    if(n) {
        return fib(b, a + b, n - 1)}
    else return a
}

console.log(fib(0, 1, 50))


function fibonacci(n) {
    return Math.round(
        (Math.pow((1 + Math.sqrt(5)) / 2, n) -
            Math.pow(-2 / (1 + Math.sqrt(5)), n)) /
        Math.sqrt(5)
    );
}

console.log(
    fibonacci(10));

function fibonacci1(num) {
    if (num <= 1) return 1;

    return fibonacci1(num - 1) + fibonacci1(num - 2);
}

console.log(
    fibonacci1(10));