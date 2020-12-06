import data from '../data/6'

const total = data.split(/\n\n/)
    .map(group => group.replace(/\n/g, '')
        .split('')
        .filter((item, pos, self) => self.indexOf(item) === pos)
        .join(''))
    .join('').length

console.log(total)