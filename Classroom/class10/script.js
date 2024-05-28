

// Question

console.log("START");

const str = "Hello";


setTimeout(function(){
    console.log('Inside 1st set timeout');
},1000);

setTimeout(function (){
    console.log('Inside second timeout');
},0);

console.log("End");