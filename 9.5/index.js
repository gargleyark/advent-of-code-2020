import data from '../data/9'

const numbers = data.split(/\n/).map(number => parseInt(number))

const invalidNumber = 1398413738

const checkForContiguousSet = numberArray => {
    let total = 0
    let index = 0
    let smallestNumber = numberArray[0]
    let largestNumber = numberArray[0]

    while (total < invalidNumber && numberArray[index]) {
        total = total + numberArray[index]
        if (numberArray[index] > largestNumber) {
            largestNumber = numberArray[index]
        }

        if (numberArray[index] < smallestNumber) {
            smallestNumber = numberArray[index]
        }

        index++
    }
    

    if (total === invalidNumber) {
        return smallestNumber + largestNumber
    }

    return null
}

let index = 0
let numbersUsed

while (!numbersUsed && numbers[index]) {
    numbersUsed = checkForContiguousSet(numbers.slice(index))
    index++
}


console.log(numbersUsed)