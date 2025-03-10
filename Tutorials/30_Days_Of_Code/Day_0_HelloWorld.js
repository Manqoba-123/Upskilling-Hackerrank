function helloWorld() {
    const prompt = require('prompt-sync')();
    const greeting = "Hello, world!";
    let name = prompt("What is your name : ");
    console.log(greeting + '\n' + name);
}

helloWorld();