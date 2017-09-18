// Generators

// Способ 1
function *numbers() {

    console.log('Begin');

    // Pausing and exiting early
    yield 1;

    yield 2;

    yield 3;

}
let iterator = numbers();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log('--------------------------');
/////////////////////////////////////////////////////////////

function *range(start, end) {
    while (start <= end) {
        yield start;
        start++;
    }

}

let iterator2 = range(1, 5);

// for of works differently here its invoke next() on each iteration
// and fetch value to the i
for (let i of iterator2) console.log(i);

console.log(
[...range(1, 5)]
);

// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
