// не знаю почему только этот вариант работает
// todo разобраться почему не работает импорт
var fs = require('fs');
//import fs from 'fs';

// зачитываем файл в формате utf8, иначе будет побайтово
var output = fs.readFileSync('./reduce/reduce_advanced.txt', 'utf8')

// обрезаем пустые места спереди и сзади
    .trim()
    // разбиваем все по новой строке и создаем массив
    .split('\n')
    // запускаем конструктор массива
    // в котором удаляем \r и разбиваем по \t (TAB)
    .map(line => line.replace('\r', '').split('\t'))
    // запускаем другой конструктор массива, в который в качество второго аргумента (первый это callback function)
    // передаем пустой объект, который будет связан с customers, в который при каждой иттерации будем запихивать customers
    .reduce((customers, line) => {
        // делаем указатель из имени и присваиваем ему значение
        customers[line[0]] = customers[line[0]] || [];
        // при каждой итерации помещаем новые данные под конкретным указателем
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})
// выводим json Объект, 2 - это ТАБы.
console.log('output:', JSON.stringify(output, null, 2));
