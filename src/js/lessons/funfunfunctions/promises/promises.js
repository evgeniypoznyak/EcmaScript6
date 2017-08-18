//import {loadImage, promise} from './load-image';

import {loadImage, testPromise} from "./load-image";

let addImg = (src) => {
    let imgElement =
        document.createElement("img")
    imgElement.src = src
    imgElement.style = 'max-height: 100px;'
    document.body.appendChild(imgElement)
}
Promise.all([
    loadImage('.././js/promises/cat1.jpg'),
    loadImage('.././js/promises/cat2.jpg'),
    loadImage('.././js/promises/cat3.jpg')
]).then((images) => {
    // после того как ВСЕ Промисы вернулись, то мы получаем массив, потому что мы указали массив в Promise.all
    // и просто пробегаемся в этом массиве и бросаем каждый элемент в функцию описанную выше
    images.forEach(img => addImg(img.src))
}).catch((error) => {
    console.log(error);
    // handle error later
})


// Мои личные тесты промисов


let promise = new Promise((resolve, reject) => {

    window.onload = () => {
        let btn = document.createElement("button")
        let cssString = `
                        display: block;
                        font-size: 25px;
                        margin: 25px;
                        border-radius: 8px
                        `
        btn.style.cssText = cssString

        btn.id = 'test'
        btn.textContent = 'Run Test!'
        document.body.appendChild(btn)

        document.getElementById('test').addEventListener('click', clickHandler)

        function clickHandler() {
            resolve();
        }
    }

})


promise.then(() => {
    let button = document.getElementById('test')
    button.style.display = 'none'
}).then(() => {

    setTimeout(() => {
        let button = document.getElementById('test')
        button.style.display = 'inline-block'
    }, 2000)

})
