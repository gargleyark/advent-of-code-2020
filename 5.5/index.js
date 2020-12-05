import data from './data'

const missingIds = []

data.map(pass => {
    const row = parseInt(pass.replace(/L|R/g, '').replace(/B/g, 1).replace(/F/g, 0), 2)
    const column = parseInt(pass.replace(/B|F/g, '').replace(/R/g, 1).replace(/L/g, 0), 2)

    return (row * 8) + column
}).sort(function(a, b) {
    return a - b;
}).forEach((id, index, array) => {
    if (array[index - 1] !== id - 1) {
        missingIds.push(id - 1)
    }
})

console.log(missingIds[1])


