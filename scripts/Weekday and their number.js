const readline = require("readline-sync")
console.log("===============================================")
console.log(`▖  ▖▄▖▄▖▖▖▄ ▄▖▖▖  ▄▖▖ ▖▄   ▄▖▖▖▄▖▄▖▄▖  ▖ ▖▖▖▖  ▖▄ ▄▖▄▖
▌▞▖▌▙▖▙▖▙▘▌▌▌▌▌▌  ▌▌▛▖▌▌▌  ▐ ▙▌▙▖▐ ▙▘  ▛▖▌▌▌▛▖▞▌▙▘▙▖▙▘
▛ ▝▌▙▖▙▖▌▌▙▘▛▌▐   ▛▌▌▝▌▙▘  ▐ ▌▌▙▖▟▖▌▌  ▌▝▌▙▌▌▝ ▌▙▘▙▖▌▌`)
console.log("===============================================")
let x = readline.question(("Enter a weekday: "))

x = Number(x)

switch (x) {
    case 1: console.log(`${x} = Monday`)
        break
    case 2: console.log(`${x} = Twesday`)
        break
    case 3: console.log(`${x} = Wednesday`)
        break
    case 4: console.log(`${x} = Thusday`)
        break
    case 5: console.log(`${x} = Friday`)
        break
    case 6: console.log(`${x} = Saturday`)
        break
    case 7: console.log(`${x} = Sunday`)
        break
    default: console.log("Enter a valid weekday")

}