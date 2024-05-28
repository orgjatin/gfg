const object = {
    name:"jatin",
    age:25,
    address:{
        city:"sonipat",
        state:"haryana"

    }
}

const object1 = Object.assign({},object);
object1.age = 10;
object.name = "nitesh";
object1.address.city = "panipat"; 
// not working for nested object
console.log(object);
console.log(object1);

// const obj = require("readline-sync");
// const key = obj.question("what is your question?");

// console.log(typeof(key));


