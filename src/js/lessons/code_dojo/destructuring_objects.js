let user = {
    firstName: 'John',
    lastName: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
}


/*
let {
    firstName: f,
    lastName: l,
    social: {facebook},
    age = 25
} = user;
console.log(f, l, facebook, age);
*/


function post(url, {data: {firstName, lastName}, cache}) {

    console.log(firstName);
    console.log(lastName);
    console.log(cache);
}


let result = post('api/users', {data: user, cache: false});

function getUserInfo() {
    return {
        firstName: 'John',
        lastName: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

let {firstName, lastName, social: {twitter}} = getUserInfo();

console.log(firstName, lastName, twitter);