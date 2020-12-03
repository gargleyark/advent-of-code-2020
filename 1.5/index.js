import data from './data'

console.log('Day 1.5 output:')

let result = 0
let index1 = 0

while (!result && data[index1]) {
    const value = data[index1]
    let index2 = 0

    while (!result && data[index2]) {
        let index3 = 0
        
        while (!result && data[index3]) {
            if ( data[index3] + data[index2] + data[index1] === 2020) {
                result = data[index3] * data[index2] * data[index1]
            }
            index3++
        }
        
        index2++
    }

    index1++
}

console.log(result)
