test('Evgeniy', 'Poznyak', 1, 2, 3)


function test(name, lastName, ...marks) {
    // console.log(name);
    // console.log(lastName);
    // console.log(marks);

    // for (let i of marks)
    //     console.log(i);

    let res = `<h1>${name} : ${lastName}</h1>`;
    $('#res').prepend(res)
}

/*function timer(time = 60) {
    console.log(time);
}*/
window.onload = function () {

    let obj = new ConsoleTimer(100);

    obj.run();


}


class MyTimer {
    constructor (t){
        this.time = t
    }
    tick() {
        this.time--
        console.log(this.time);
    }

    run() {
        setInterval(() => {
            this.tick()
        }, 1000);
    }
}

class ReverseTimer extends MyTimer {
    tick () {
        this.time++
    }
}

class ConsoleTimer extends ReverseTimer {
    tick () {
        super.tick()
        console.log(this.time)
    }
}



