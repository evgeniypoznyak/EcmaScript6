//let languages = ['JavaScript', 'PHP', 'Python', 'Ruby'];

//let js = languages[0];
//let js, php, py, rb;
let [js, php, py, rb] = ['JavaScript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, rb);


let scores = [3, 4, [5, 6]]

let [low, mid, [hig, higer]] = scores;

console.log(low, mid, hig, higer);


function computeScore([low, mid]) {
    console.log(low, mid);
}

computeScore([3, 4])

let yes = 'Yes';
let no = 'No';

[yes, no] = [no, yes];
console.log(yes, no);