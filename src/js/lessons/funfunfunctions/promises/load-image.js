// получаем url и бросаем его в функцию
export function loadImage(url) {
    // эта функция возвращает Промис
    return new Promise((resolve, reject) => {
        // так как все функсии это closures, то мы имеем доступ к url здесь

        // создаем объект изображения
        let image = new Image();

        // вешаем событие на то, когда изображение загрузится
        // но не возвращаем промис, он должен быть весь до конца кода загружен и вернут
        image.onload = function () {
            resolve(image)
        }
        image.onerror = function () {
            let message = 'Could not load image at ' + url
            reject(new Error(message))
        }

        // После того, как повесили события, то можно попытаться присвоить к изображению src = url
        // Если будет ошибка, то у нас уже есть описанная функция
        image.src = url
    })
}


// Создаётся объект promise внутри функции
export function testPromise(stringTest, numberTimeout = 5000) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stringTest);
        }, numberTimeout)

    });


}
