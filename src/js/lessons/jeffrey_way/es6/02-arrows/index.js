class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(task => task.toGulp());
        // this.tasks.forEach((task) => {
        //     console.log(this);
        // })
    }
}
class Task{
    toGulp(){
        console.log('gulp');
    }
}


new TaskCollection([
    new Task,
    new Task,
    new Task]).log();
