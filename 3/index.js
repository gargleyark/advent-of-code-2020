import data from './data'

console.log('Day 3 output:')

let indexX = 0
let indexY = 0
let result = 0

while (data[indexY]) {
    indexY = indexY + 1
    indexX = indexX + 3

    if (indexX > 30) {
        indexX = indexX - 31
    }

    
    if (data[indexY] && data[indexY][indexX] === '#') {
        result++
    }
}

console.log(result)

