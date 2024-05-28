
const cart = [{name: 'Iphone', price: 10, qty: 5}, 
              {name: 'Ipad', price: 5.5, qty: 2}, 
              {name: 'Apple Watch', price: 8, qty: 1} ];

const total = cart.reduce((acc,itr) => acc + itr.price*itr.qty ,0);
console.log(total);