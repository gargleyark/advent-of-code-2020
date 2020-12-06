import data from '../data/6'

const total = data.split(/\n\n/)
    .map(group => {
        const matches = group.match(/\n/g)

        const groupLength = matches ? matches.length + 1 : 1

        return group.replace(/\n/g, '')
            .split('')
            .filter((item,  pos, self) => group.match(new RegExp(item, 'g')).length === groupLength && self.indexOf(item) === pos)
            .join('')
    })
    .join('').length

console.log(total)