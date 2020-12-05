import data from '../data/4'

const passports = data.split('\n\n').map(passport => passport.replace('\n', ' '))

const validPassports = passports.filter(passport => passport.match(/byr:|iyr:|eyr:|hgt:|hcl:|ecl:|pid:/g).length === 7)

console.log(validPassports.length)

