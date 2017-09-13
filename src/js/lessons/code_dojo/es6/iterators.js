// Обычный массив
let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

// У каждого массива есть скрытый метод [Symbol.iterator]()
let iterator = xmen[Symbol.iterator]();

// При вызове next() возвращается следующий элемент массива со значениями value и done
// Создаем цикл, который будет возвращать следующий элемент пока done не станет false
let next = iterator.next();
while(!next.done){
    console.log(next.value);
    next = iterator.next()
}


/*let idGenerator = {
    // обязательный метод итератора
    [Symbol.iterator]() {
        let id = 1;
        // должен возвращать объект
        return {
            //обязательный метод возвращаемого объекта
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;
                // Next возвращает объект, так как значения объекта и переменных совпадают, то нет объявления внутри
                // они просто падают туда
                return {value, done};
            }
        };
    }
}

for (let id of idGenerator) {
    console.log(id);

}*/


/*let randomGenerator = {

    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;
                return {value, done};
            }
        };
    }
}

let random = randomGenerator.generate();
console.log(random.next().value);*/


class ArrayIterator {
    constructor(array) {
        this.array = array.sort();
        this.index = 0;
    }

    next() {
        let result = {value: undefined, done: true}
        if (this.index < this.array.length) {
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }
        return result;
    }

}


class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);

        /*  let tasks = this.tasks;
          let index = 0;

          return {
              next() {
                  let result = {value: undefined, done: true}
                  if (index < tasks.length) {
                      result.value = tasks[index];
                      result.done = false;
                      index += 1;
                  }
                  return result;
              }
          }*/
    }
}

let taskList = new TaskList();

taskList.addTasks('Изучить JS', 'Изучить ES6', 'Купить продукты');

for (let task of taskList) {
    console.log(task);
}


/*
console.info('for');
for(let index = 0; index < xmen.length; index++){
    console.log(xmen[index]);
}

console.info('for ...in');;
for (let key in xmen){
    console.log(xmen[key]);
}

console.info('forEach');

xmen.forEach(xman => console.log(xman));
*/


