import data from '../data/8'

const instructions = data.split(/\n/)

let acc = 0
const usedInstructions = []
let pointerPosition = 0

while (!usedInstructions.includes(pointerPosition)) {
    usedInstructions.push(pointerPosition)
    const instruction = instructions[pointerPosition]

    const changeValue = parseInt(instructions[pointerPosition].match(/-?\d+/)[0])

    if (instruction.includes('acc')) {
        acc = acc + changeValue
    }

    if (instruction.includes('jmp')) {
        pointerPosition = pointerPosition + changeValue
    } else {
        pointerPosition = pointerPosition + 1
    }

}

console.log(acc)