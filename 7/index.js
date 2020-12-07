import data from '../data/7'

const bags = data.split(/\n/)

let total = 0
const types = ['shiny gold']
const matchingTypes = []

while (types.length) {
    bags.forEach(bag => {
        const name = bag.match(/^\w+\s\w+/)[0]
        
        if (bag.match(new RegExp(types[0])) && bag.match(new RegExp(`^${types[0]}`)) === null) {
            types.push(name)

            if (data.match(new RegExp(`\n${name}`)).length === 1 && !matchingTypes.includes(name)) {
                matchingTypes.push(name)
            }
        }
    })
    types.shift()
}

console.log(matchingTypes.length)