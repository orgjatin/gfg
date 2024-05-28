
// const str="Hello World";
// let freq = new Map();

// for(let char of str){
//     if(freq.has(char)){

//         freq.set(char, freq.get(char)+1);

//     }else{
//         freq.set(char,1);
//     }
// }

// console.log(freq);

const string = "Hello World this is a beautiful World of Hello";

let splitWords = string.split(' ');

let frequency = new Map();

console.log(splitWords);

for(let result of splitWords){
    if(frequency.has(result)){
        frequency.set(result,frequency.get(result)+1);
    }
    else{
        frequency.set(result,1);
    }
}
console.log(frequency);

