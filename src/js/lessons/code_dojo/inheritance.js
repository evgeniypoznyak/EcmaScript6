class Task {
    constructor(title = Task.getDefaultTitle()) {
        this._title = title;
        this.done = false;
        Task.count ++;
        console.log('Creating task...');
    }

    get title () {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle () {
        return 'New Task';
    }

    complete() {
        this.done = true;
        console.log(`Task  ${this.title}  is complete!`);

    }
}

Task.count = 0;

class SubTask extends Task {
    constructor(subtitle, parent) {
        super(subtitle);
        this.parent = parent;
        console.log('Creating a subtask...');
    }
    
    complete(){
        super.complete();
        console.log(`Subtask ${this.title} is complete`);
    }

}
console.log(SubTask.count);
let task = new Task('Покушать');
console.log(SubTask.count);
let subtask = new SubTask('Поехать домой', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

console.log(task);
console.log(subtask);

task.complete();
subtask.complete();