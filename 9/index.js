import data from '../data/9'

const numbers = data.split(/\n/).map(number => parseInt(number))

const checkInvalidNumbers = (number, prev25) => {
    let prevIndex = 0
    let matchFound = false

    while (!matchFound && prev25[prevIndex]) {

        for (let i = 0; i < 25; i++) {
            if (prev25[prevIndex] + prev25[i] === number && prev25[prevIndex] !== prev25[i]) {
                matchFound = true
            }
        }
        prevIndex++
    }


    if (!matchFound) {
        return number
    }
}

let index = 25
let invalidNumber

while (!invalidNumber && numbers[index]) {
    invalidNumber = checkInvalidNumbers(numbers[index], numbers.slice(Math.max(index - 25, 0)))
    index++
}


console.log(invalidNumber)