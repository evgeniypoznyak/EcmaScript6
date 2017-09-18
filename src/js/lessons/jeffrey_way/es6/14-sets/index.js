let items = new Set(['one', 'two', 'three', 'one']);

console.log(items);

// Checking size by API
console.log(items.size);


items.add('four');
console.log(items);

items.delete('two');
console.log(items);

let check = 'four';
console.log(
    `Does item has provided value ${check}? - ${items.has(check)}`
);

// Iterable
items.forEach(item => console.log(item));

//Delete
// items.clear();
// console.log(items);


console.log(items.values());

for (let item of items) {
    console.log(item);
}