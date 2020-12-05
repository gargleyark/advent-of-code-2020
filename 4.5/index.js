import data from '../data/4'

const passports = data.split('\n\n').map(passport => passport.replace('\n', ' '))
// const passports = []
const validPassports = passports.filter(passport => {
    const byr = passport.match(/byr:(\d\d\d\d)(\s|$)/)
    const iyr = passport.match(/iyr:(\d\d\d\d)(\s|$)/)
    const eyr = passport.match(/eyr:(\d\d\d\d)(\s|$)/)
    const hgt = passport.match(/hgt:(\d+)(in|cm)(\s|$)/)
    const hcl = passport.match(/hcl:#(\w\w\w\w\w\w)(\s|$)/)
    const ecl = passport.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)(\s|$)/)
    const pid = passport.match(/pid:(\d\d\d\d\d\d\d\d\d)(\s|$)/)


    let valid = true
    if (byr) {
        if(parseInt(byr[1]) < 1920 || parseInt(byr[1]) > 2002) {
            valid = false
        }
    }

    if (iyr) {
        if(parseInt(iyr[1]) < 2010 || parseInt(iyr[1]) > 2020) {
            valid = false
        }
    }

    if (eyr) {
        if(parseInt(eyr[1]) < 2020 || parseInt(eyr[1]) > 2030) {
            valid = false
        }
    }

    if (hgt) {
        if (hgt[2] === 'in') {
            if(parseInt(hgt[1]) < 59 || parseInt(hgt[1]) > 76) {
                valid = false
            }
        } else if (hgt[2] === 'cm') {
            if(parseInt(hgt[1]) < 150 || parseInt(hgt[1]) > 193) {
                valid = false
            }
        }
    }
    
    return byr && iyr && eyr && hgt && hcl && ecl && pid && valid
})

console.log(validPassports.length)

