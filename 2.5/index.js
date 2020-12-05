import data from '../data/2'

console.log('Day 2.5 output:')

const result = data.filter(item => {
    const char = item.match(/(.)\:/)[1]
    const limits = item.match(/\d+-\d+/)[0]
    const min = parseInt(limits.split('-')[0])
    const max = parseInt(limits.split('-')[1])
    const password = item.match(/\w+$/)[0]

    if (password[min - 1] === char || password[max - 1] === char) {
        return password[min - 1] !== password[max - 1]
    }
}).length

console.log(result)

