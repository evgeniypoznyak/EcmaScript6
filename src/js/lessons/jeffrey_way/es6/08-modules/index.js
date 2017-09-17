// ES5
//var TaskCollection = require('./modules/TaskCollection');

//ES6
//import {TaskCollection, foo, foo2} from "./modules/TaskCollection";
// console.log(foo);
// console.log(foo2);

// import TaskCollection, {foo} from "./modules/TaskCollection";
// console.log(foo);

import TaskCollection from "./modules/TaskCollection";

new TaskCollection([
    'Go to the store',
    'Drink Coffee',
    'Play with kids'
]).dump()