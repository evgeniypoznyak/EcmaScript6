import './index.html'

const
    search 			= document.getElementById('search'),
    resultList	= document.getElementById('foundList'),
    movieList 		= document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img)
}

//AJAX
//check status request
const checkStatus = response => {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
};

//Delete pre-elements
const removeEl = () => {
    while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
    }
    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
    }
};

const searching = (s) => {
    if (s.target.value.length > 3) {
        removeEl();
        const api = `http://www.omdbapi.com/?apikey=57d13b99&s=${search.value}`;
        fetch(api)
            .then(value => value.json())
            .then(movies => {
                if (movies.Search) {
                    movies.Search.forEach(movie =>
                        addMovieToList(movie))
                }
            }).catch(error => console.error(error));
    }
}




//Listener
search.addEventListener('keyup', searching);




/*

function getData(url) {
    return new Promise(function (resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = function (error) {
            reject(error);
        };

        xhr.send();


    });

}

getData(`http://www.omdbapi.com/?apikey=57d13b99&s=${search}`)
    .then(movies =>
        movies.forEach(movie =>
            addMovieToList(movie)))
    .catch(error => console.error(error));


*/






function go(num) {
    return new Promise(function (resolve, reject) {
        let delay = Math.ceil(Math.random() * 3000);
        console.log(num, delay);
        setTimeout(() => {
            if (delay < 2) {
                reject(num)
            }
            resolve(num)
        }, delay)
    })
}

let p1 = go(3);
let p2 = go(4);
let p3 = go(5);

Promise.all([
    p1, p2, p3
]).then(value => console.log(value))
    .catch(error => console.error(error))

Promise.race([
    p1, p2, p3
]).then(value => console.log('Race winner is: ' + value))
    .catch(error => console.error(error))