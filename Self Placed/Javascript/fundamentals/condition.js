
const pkg = require('readline-sync');

const age = pkg.question("how old are you?");

if(age > 18 ){
    console.log("You are eligible for votting");
}

else{
    console.log("You are not eligible for votting");
}