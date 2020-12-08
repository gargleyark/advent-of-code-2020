import data from '../data/8'

const instructions = data.split(/\n/)
let total

for (let i = 0; i < instructions.length; i++) {
    const newInstructions = [...instructions]

    let acc = 0
    const usedInstructions = []
    let pointerPosition = 0

    console.log('changing', newInstructions[i])

    if (newInstructions[i].match(/nop|jmp/) && !total) {
        newInstructions[i] = newInstructions[i].replace(/nop|jmp/, value => value === 'nop' ? 'jmp' : 'nop')

        while (!usedInstructions.includes(pointerPosition) && newInstructions[pointerPosition]) {
            usedInstructions.push(pointerPosition)
            const instruction = newInstructions[pointerPosition]
        
            const changeValue = parseInt(instruction.match(/-?\d+/)[0])
        
            if (instruction.includes('acc')) {
                acc = acc + changeValue
            }
        
            if (instruction.includes('jmp')) {
                pointerPosition = pointerPosition + changeValue
            } else {
                pointerPosition = pointerPosition + 1
            }
        
            if (pointerPosition === instructions.length - 1) {
                total = acc
            }
        }
    }

    
}



console.log(total)