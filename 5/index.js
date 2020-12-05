import data from './data'

const ids = data.map(pass => {
    let rowTotal = 128
    let row = 0
    let columnTotal = 8
    let column = 0
    pass.match(/^......./)[0].split('').map(a => {
        if (a === 'B') {
            row = row + rowTotal / 2
        }
        rowTotal = rowTotal / 2
    })

    pass.match(/...$/)[0].split('').map(a => {
   
        if (a === 'R') {
           column = column + columnTotal / 2
        }
        columnTotal = columnTotal / 2
     })

    return (row * 8) + column
}).sort(function(a, b) {
    return a - b;
}).reverse()

console.log(ids[0])

// console.log(validPassports.length)

