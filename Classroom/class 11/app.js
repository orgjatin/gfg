
async function fun(productId){
    const product1 = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await product1.json();
    return data;
}

async function test(){
const results = await Promise.all([fun(1),fun(2),fun(3),fun(4)]);
console.log(results); 
// const product1 = await fun(1);
// const product2 = await fun(2);
// const product3 = await fun(3);
// const product4 = await fun(4);


// console.log(product1);
// console.log(product2);
// console.log(product3);
// console.log(product4);

}

test();