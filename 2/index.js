import data from '../data/2'

console.log('Day 2 output:')

const result = data.filter(item => {
    const char = item.match(/(.)\:/)[1]
    const limits = item.match(/\w+-\w+/)[0]
    const min = parseInt(limits.split('-')[0])
    const max = parseInt(limits.split('-')[1])
    const count = item.match(/\w+$/)[0].match(new RegExp(char, 'g'))

    if (!count) {
        return false
    }

    return count.length >= min && count.length <= max
}).length

console.log(result)

