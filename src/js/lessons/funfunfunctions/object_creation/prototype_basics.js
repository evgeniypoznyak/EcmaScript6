function talk() {
    console.log(this.sound);
}

let animal = {
    talk
}

animal.talk();

/*let cat = {
    sound: 'meow!'
}*/

let dog = {
    sound: 'woof!'
}

let praieDog = {
    howl: function () {
        console.log(this.sound.toUpperCase());
    }
}

/*Object.setPrototypeOf(cat, animal)*/
/*cat.talk()*/

Object.setPrototypeOf(dog, animal)
animal.talk = function () {
    console.log('poop');
}
dog.talk()
Object.setPrototypeOf(praieDog, dog)
praieDog.howl()
