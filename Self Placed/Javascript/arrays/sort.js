
// let str = ["ajay", "vijay", "nitesh", "manish", "sahil", "jaisingh"];

// console.log( str.sort());

let num = [1,5,45,84,70,9,6,5];
// accending order
function sortNum(a,b){
    return a-b;
}
console.log(num.sort(sortNum));