class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.title = title
        console.log('Создание задачи...');
        Task.count += 1;
        this.done = false
    }
    complete(){
        this.done = true;
        console.log(this.title + ' - выполнено');
    }

    static getDefaultTitle(){
        return 'Задача';
    }

}

Task.count = 0;

let task = new Task('Поехать домой');
let task2 = new Task();

console.log(typeof task);
console.log(task instanceof Task)
console.log(task.title);
console.log(task2.title);
task.complete();

console.log(Task.count);