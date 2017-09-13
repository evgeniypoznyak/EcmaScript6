//IIFE
/*(function() {
    console.log('IIFE');
})();*/

//IIFE Arrow
/*((x) => console.log('IIFE ARROW' + x))('!');*/


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// numbers.forEach(num => sum += num)
// let squared = numbers.map(n => n * n)
// console.log(sum);
// console.log(squared);

/*
let person = {
    name: 'Bob',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
        console.log(this);
    }
}


person.greet();

let person2 = {
    name: 'Bob',
    greet:  function() {
        var self = this;
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
            console.log(this);
        }, 2000);
    }
}


person2.greet();
*/


let Task = () => console.log('Creating Task...');

let task = new Task();



// let add = (x, y) => x + y;
// console.log(add(2, 3));
// let square = x => x * x;
// console.log(square(3));
// let giveMeAnswer = () => 42;
// console.log(giveMeAnswer());
// let log = ()=> console.log('poop');
// log();
// let multiply = (x, y) => x * y;
// console.log(multiply(2, 2));
// let getPerson = () => ({name: 'John'});
// console.log(getPerson());




