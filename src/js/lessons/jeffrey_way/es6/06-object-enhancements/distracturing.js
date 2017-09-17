let person = {
    name: 'Evgeniy',
    age: 34,
    results: ['foo', 'bar'],
    count: 30
};


let {results, count} = person;
console.log(results);
console.log(count);


function getData({results, count}) {
    console.log(results, count);
}

getData({
    name: 'Evgeniy',
    age: 34,
    results: ['foo', 'bar'],
    count: 30
})


function greet({name, age}) {
    console.log(`Hello, ${name}. You are ${age}.`);
}

greet({
    name: 'Evgeniy',
    age: 34
})