// http://jsonplaceholder.typicode.com/posts/1

//const fetch = require('node-fetch');

//const co = require('co');


/*
fetch('http://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => post.title )
    .then(x => console.log(x))
*/


/*co(function *() {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1';
    const response = yield fetch(uri);
    const post = yield response.json()
    const title = post.title;
    console.log(`Title: ${title}`);

})*/


run(
    //generator
    function *() {
        const uri = 'http://jsonplaceholder.typicode.com/posts/1';
        const response = yield fetch(uri);
        const post = yield response.json()
        const title = post.title;
        console.log(`Title: ${title}`);

    }
    )

function run(generator) {
    const iterator = generator();
    const iteration = iterator.next();
    const promise = iteration.value;
    promise.then( x => {
    const  anotherPromise =  iterator.next(x).value
     anotherPromise.then(y => {
         return iterator.next(y)
     })
    })
}
