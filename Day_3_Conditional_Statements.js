function evenOdd() {
    const prompt = require("prompt-sync")();
    let num = prompt("Enter integer:");
    if (num % 2 == 0 && num >= 2 && num <= 5) {
        console.log("Not weird");
    }
    else if (num % 2 == 0 && num >= 6 && num <= 20) {
        console.log("Weird");
    }
    else if (num % 2 === 0 && num > 20) {
        console.log("Not weird");
    }
    else {
        console.log("weird");
    }
}

evenOdd()