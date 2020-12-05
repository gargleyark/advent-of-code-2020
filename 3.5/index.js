import data from '../data/3'

console.log('Day 3 part 2 output:')

const getSlope = (right, down) => {
    let result = 0
    let indexX = 0
    let indexY = 0

    while (data[indexY]) {
        indexY = indexY + down
        indexX = indexX + right
    
        if (indexX > 30) {
            indexX = indexX - 31
        }
    
        
        if (data[indexY] && data[indexY][indexX] === '#') {
            result++
        }
    }

    return result
}

const result1 = getSlope(1,1)
const result2 = getSlope(3,1)
const result3 = getSlope(5,1)
const result4 = getSlope(7,1)
const result5 = getSlope(1,2)

console.log(result1 * result2 * result3 * result4 * result5)

