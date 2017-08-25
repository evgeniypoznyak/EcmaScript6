class Animal {
    constructor(age) {
        this.age = age;

    }

    eat() {
        return 1;
    }
}

class Cat extends Animal {
    constructor(age) {
        super(age);
        this.mustahe = true;
    }

    getVoice() {
        return "myamyamyamya"
    }
}

class Dog extends Animal {
    constructor(age) {
        super(age);
        this.tail = true;
    }

    getVoice() {
        return "gafgafgaf"
    }
}

class Tiger extends Cat{
    constructor(age){
        super(age);
        this.color = 'nz';
    }
}

var cat = new Cat(1);
var dog = new Dog(2);
var t = new Tiger(3)

console.log(cat);
console.log(dog);
console.log(t);