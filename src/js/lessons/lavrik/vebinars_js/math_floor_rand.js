console.log(mtRand(0, 10));

function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}