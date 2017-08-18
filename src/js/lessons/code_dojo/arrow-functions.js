let add = (x, y) => x + y;

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = ()=> console.log('poop');

let multiply = (x, y) => x * y;

let getPerson = () => ({name: 'John'});

//IIFE
(function() {
    console.log('IIFE');
})();

//IIFE Arrow
((x) => console.log('IIFE ARROW' + x))('!');


console.log(add(2, 3));
console.log(square(3));
console.log(giveMeAnswer());
log();
console.log(multiply(2, 2));

console.log(getPerson());