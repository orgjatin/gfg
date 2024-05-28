// if condition is inside another condition



const pkg = require('readline-sync');

const age = pkg.question("how old are you?");

if(age > 18 ){
    console.log("You are eligible for votting");

    if( age == 20){
        console.log("You are just 20");
    }

    else{
        console.log(`${age} is your age`);
    }
}

else{
    console.log("You are not eligible for votting");
}