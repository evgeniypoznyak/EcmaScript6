class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title
        console.log('Создание задачи...');
        Task.count += 1;
        this._done = false
    }
    complete(){
        this.done = true;
        console.log(this.title + ' - выполнено');
    }

    get done() {
        return this._done === true ? 'Выполнена' : 'Не выполнена';
    }

    set done(value){
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        }else console.error('Ошибка! Укажите значение true или false')
    }

    static getDefaultTitle(){
        return 'Задача';
    }

}

Task.count = 0;

let task = new Task('Поехать домой');
console.log(task.done);
console.log(task._done);
task.complete()
console.log(task.done);
console.log(task._done);


// console.log(task.done, task._done);
// task.complete()
// console.log(task.done, task._done);



// let task2 = new Task();
//
// console.log(typeof task);
// console.log(task instanceof Task)
// console.log(task.title);
// console.log(task2.title);
// task.complete();
//
// console.log(Task.count);