let timer = new Promise(function (resolve, reject) {
    //resolve();

    console.log('Init Promise');
    setTimeout(function () {
        console.log('Timeout done');
        resolve();
    }, 5000)

});

// will triggered once you called resolve()
//timer.then();

timer.then(function () {
    console.log('Oh! Timer is completed!');
})