
// node package

const readlineSync = require("readline-sync");

const userName = readlineSync.question("What is your name ? ");

const age = readlineSync.question("What is your age ?");
let userAge = 2024 - Number(age);
console.log(`Welcome ${userName}`);
console.log(`You were born in ${userAge}`);