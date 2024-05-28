let arr = [1,2,3,4,5];

function sqOfNum(num){
    return num**2;
}

function cubOfNum(num){
    return num**3;
}

function calculation(power,arr){
    let result = [];
    for(let cal of arr){
        result.push(power(cal));
    }
    return result;
}

let output =calculation(cubOfNum,arr);
let output1 =calculation(sqOfNum,arr);
console.log("cube",output);
console.log("square",output1);


