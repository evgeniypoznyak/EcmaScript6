function fire(bool) {

    if (bool) {
        let foo = 'bar'; // foo = 'bar';
        console.log(foo); //bar
    }
    else {
        console.log(foo); // hosting
    }
}

fire(false);