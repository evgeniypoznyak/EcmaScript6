let object = {
    iterator: 0,
    [Symbol.iterator](){}
}




/*
let password = Symbol();


let user = {
    username: 'r2d2',
    [password]: 'c3po',
    password: 'sdfsdf'
}

console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

/!*
let password = user[Symbol.for('password')];


console.log(password);*!/

console.log(Object.getOwnPropertySymbols(user));
*/








/*
let synbol = Symbol('name');
let synbol2 = Symbol('name');
console.log(synbol);
console.log(synbol2);
console.log(synbol === synbol2);*/


/*
let symbol = Symbol.for('name');

let name = Symbol.keyFor(symbol)
console.log(name);
*/

