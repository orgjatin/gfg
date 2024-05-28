
// const arr = [[1,2,3],[4,5],[6,7,8,9,10],90,100,[2356,,3256]];

// const res = arr.reduce((acc,itr))


// console.log(res);

// let num = 12345;

let ans =0;

function num(num){
        
    while(num!=0){

        let rem = num%10;
        ans = ans * 10 + rem;
        num = parseInt(num/10);
    }
    console.log(ans);

}


num(12345);