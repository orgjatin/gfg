let sum =0;
function calSum(min,max){
    for(let i=min; i<=max; i++){
        sum = sum+i;
    }
    console.log(sum);
}

calSum(1,10);