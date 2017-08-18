var animals = [
    {name: 'Белка', spec: 'rabbit'},
    {name: 'Стрелка', spec: 'dog'},
    {name: 'Барбос', spec: 'cat'},
    {name: 'Шарик', spec: 'dog'},
]

/*var dogs = animals.filter(function (t) {
    return t.spec === 'dog';
})

console.log(dogs);*/


var names = animals.map((t) => {
    return t.name + ' на самом деле ' + t.spec
});

var names2 = animals.map(t => t.name + ' на самом деле ' + t.spec);

console.log(names);


const plus1 = (el) => {
    return el + 1;
}
console.log([3, 4].map(plus1));