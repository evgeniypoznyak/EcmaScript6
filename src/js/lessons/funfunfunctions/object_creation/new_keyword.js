function Person(saying) {
    this.saying = saying
};

Person.prototype.talk = function () {
    console.log('I say', this.saying);
};

//  How new works
function spawn(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
//    var argsArray = Array.from(arguments);
    var argsArray = Array.prototype.slice.apply(arguments);
    return  constructor.apply(obj,argsArray.slice(1)) || obj;
}

var crockford = spawn(Person, 'Semicolans!!! 1one1');
crockford.talk();