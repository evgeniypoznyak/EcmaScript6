function log(strategy) {
    strategy.handle();
}


// log(new class {
//         handle() {
//             console.log('Using strategy and log().');
//         }
//     }
// )

class ConsoleLogger {
    handle() {
        console.log('Using strategy and log().');
    }
}

log(new ConsoleLogger)