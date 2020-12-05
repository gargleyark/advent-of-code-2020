import data from '../data/1'

const getTotal = (depth, index) => {
    if (!depth) {
        return data[index]
    }

    if (data[index + 1]) {
        return getTotal(depth - 1, index + 1)
    }
}

console.log('Day 1 output:')

let result = 0
let index1 = 0

while (!result && data[index1]) {
    let index2 = 0

    while (!result && data[index2]) {
        if (data[index2] + data[index1] === 2020) {
            result = data[index2] * data[index1]
        }
        index2++
    }

    index1++
}

console.log(result)

getTotal(2, 0)
