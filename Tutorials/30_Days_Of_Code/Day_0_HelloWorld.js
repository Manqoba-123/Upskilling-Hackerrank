function helloWorld() {
    // This line of code prints the first line of output
    const prompt = require('prompt-sync')();
    const greeting = "Hello, world!";
    let name = prompt("What is your name : ");
    console.log(greeting + '\n' + name);
    
    // Write the second line of output that prints the contents of 'inputString' here.
}

helloWorld();