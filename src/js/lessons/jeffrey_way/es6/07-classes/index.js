class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    static register(...args){

        return new User(...args);
    }

    changeEmail(newEmail) {

        this.email = newEmail;
    }

    get foo() {
        return 'foo'
    }
    

}

//let user = new User ('Evgeniy', 'someemail@mail.com');
let user = User.register('Evgeniy', 'someemail@mail.com');

//user.changeEmail('foo@mail.com');

console.dir(user);
console.log(user.foo);