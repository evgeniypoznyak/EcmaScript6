//export default class TaskCollection {
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    dump() {
        console.log(this.tasks);
    }
}

export let foo = 'bar';
export let foo2 = 'bar2';

export default TaskCollection;

// CommonJs
/*
module.exports = {
    foo: 'bar'
}
*/