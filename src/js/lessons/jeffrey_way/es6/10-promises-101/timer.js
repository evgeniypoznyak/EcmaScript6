let timer = function (length) {

    return new Promise(function (resolve, reject) {
    console.log('Init Promise');
    setTimeout(function () {
        console.log('Timeout done');
        resolve('Oh!!! Timer is completed!!!');
    }, length)

});

}



timer(4000).then((data) => {
    console.log(data);
})

