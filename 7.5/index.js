import data from '../data/7'

const bags = data.split(/\n/)

let types = ['shiny gold 1']
const requiredBags = []

while (types.length) {
    const bag = data.match(new RegExp(`(\n|^)${types[0].replace(/\s\d+$/, '')}.*`))
    
    if (bag) {
        const bagCounts = bag[0].match(/\d+\s\w+\s\w+/g)
        const multiplier = parseInt(types[0].match(/\d+$/)[0])

        if (bagCounts) {
            requiredBags.push(bagCounts.map(count => parseInt(count.match(/\d+/)[0]) * multiplier))
            types.push(bagCounts.map(count => count.replace(/\d+\s/, '') + ` ${multiplier * parseInt(count.match(/\d+/)[0])}`))
        }
    }

    types.shift()
    types = types.flat()
}

console.log(requiredBags.flat().reduce((acc, curr) => acc + parseInt(curr), 0))