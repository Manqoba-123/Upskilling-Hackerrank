
function dataTypes() {
    const prompt = require("prompt-sync")();
    let integer = parseInt(prompt("Enter integer:"));
    let float = parseFloat(prompt("Enter float:"));
    let string = prompt("Enter string:")

    let i = 4;
    let d = 4.0;
    let s = "HackerRank";

    console.log(i + integer);
    console.log(Math.round(d + float).toFixed(1));
    console.log(s + " " + string);
}
dataTypes();