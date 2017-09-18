let title = 'Red Rising';

// Поиск в любом месте
if (title.includes('Red')) {
    console.log('Exist');
}

console.log(['Foo', 'Bar'].includes('Bar'));


// Если начинается с
if (title.startsWith('Red')) {
    console.log('Exist');
}
// Если заканчивается на
if (!title.endsWith('Red')) {
    console.log('Not exist');
}

//Повторение
let str = 'lol ';
console.log(str.repeat(10));


let heading = 'Welcome';
console.log(
    `${'>='.repeat(5)} ${heading} ${'=<'.repeat(5)}`
);

