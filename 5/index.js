import data from './data'

const ids = data.map(pass => {
    const row = parseInt(pass.replace(/L|R/g, '').replace(/B/g, 1).replace(/F/g, 0), 2)
    const column = parseInt(pass.replace(/B|F/g, '').replace(/R/g, 1).replace(/L/g, 0), 2)

    return (row * 8) + column
}).sort(function(a, b) {
    return a - b;
}).reverse()

console.log(ids[0])

// console.log(validPassports.length)

