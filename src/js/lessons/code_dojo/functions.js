/*function greet(greeting, name) {
    console.log(`${greeting}, ${name}`);
}*/
function greet(greeting = 'Hello', name = 'friend') {
    console.log(`${greeting}, ${name}`);
}


// greet('Hello', 'Bill')
// greet('Hello')
// greet(undefined, 'Bill')
// greet()


function sum(...arr) {

    let res = arr.reduce((prev, cur) => prev = prev + cur, 0)
    console.log(res);

    /*
      let total = 0;
     for (let i of arr) {
         total = total + i
     }
      console.log(total);
    */

}

sum(5, 5, 5)








