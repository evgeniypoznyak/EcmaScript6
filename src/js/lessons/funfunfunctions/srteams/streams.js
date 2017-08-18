const fs = require('fs')
const Bacon = require('baconjs')
const highland = require('highland')
const stream = highland(fs.createReadStream('customers.csv', 'utf8'))

    stream.split('\t')
    .map(line => line.split(','))
    .map(parts => ({
        name: parts[0],
        numPurchases: parts[1]
    }))
    .filter( customer => customer.numPurchases > 2)
    .map(customer => customer.name)
    .each(x => console.log('each: ', x))

const baconStream = new Bacon.Bus();

baconStream
    .map(word => stream)
    .onValue(word => console.log(word))




/*

const stupidNumberStream = {
    each: (callback) => {
        setTimeout(() => callback(1), 1000)
        setTimeout(() => callback(2), 2000)
        setTimeout(() => callback(3), 3000)
    }
}


createStupidNumberStream.each(console.log)

*/

