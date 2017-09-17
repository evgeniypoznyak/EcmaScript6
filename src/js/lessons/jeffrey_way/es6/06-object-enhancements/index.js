// Object Shorthand


function getPerson() {
    let name = 'Evgeniy';
    let age = 34;
    // if variables name the same,  we using same field in object
    return { name, age }
}

console.log(getPerson().name);



// Methods Shorthand

function getPerson2() {
    let name = 'Evgeniy';
    let age = 34;
    // if variables name the same,  we using same field in object
    return { 
        name, 
        age,
        greet() {
            return `Hello ${this.name}`
        }
    }
}

console.log(getPerson2().greet());