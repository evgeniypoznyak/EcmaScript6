//Rest operator
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current)
}

console.log(sum(1, 2, 3, 4, 5));


//Spread operator
function sum2(x, y) {
    return x + y
};


let numbers = [1, 2];

console.log(sum2(...numbers));