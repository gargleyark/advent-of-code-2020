import data from './data'

const missingIds = []

data.map(pass => {
    let rowTotal = 128
    let row = 0
    let columnTotal = 8
    let column = 0
    pass.split('').forEach(a => {
        if (a === 'B') {
            row = row + rowTotal / 2
        }
        rowTotal = rowTotal / 2

        if (a === 'R') {
            column = column + columnTotal / 2
        }

        if (a.match(/R|L/)) {
            columnTotal = columnTotal / 2
        }
    })

    return (row * 8) + column
}).sort(function(a, b) {
    return a - b;
}).forEach((id, index, array) => {
    if (array[index - 1] !== id - 1) {
        missingIds.push(id - 1)
    }
})

console.log(missingIds[1])


