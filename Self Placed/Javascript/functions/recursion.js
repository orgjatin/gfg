
function rec(num){
    if(num ==1){
        return num;
    }

    return num*rec(num-1);
}

const result = rec(5);
console.log(result);