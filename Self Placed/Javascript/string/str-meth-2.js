
let str = "my name is jatin sangwan";

// let res = str.indexOf("n");
// console.log(res);

function index(string,char){
    if(string.indexOf(char)){
        console.log(`Character ${char} is found in the string "${string}"`);
        return char;
    }
    else{
        console.log("Character not found");
    }
}

let result = index("my name is coder","s");
