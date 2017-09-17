function fire(bool) {
    // var foo; hosting
    //declare variables on the top of function
    if (bool) {
        var foo = 'bar'; // foo = 'bar';
        console.log(foo); //bar
    }
    else {
        console.log(foo); // hosting
    }
}


fire(false);