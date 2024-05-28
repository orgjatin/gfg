
const user ={
    name:"Jatin",
    age:25
}
const user1 ={
    name:"Jat",
    age:22
}
const user2 ={
    name:"Satin",
    age:24
}

function address(state,city){
    console.log(this.name,this.age,state,city); 
}

// address.call(user1,"haryana","sonipat");
// address.apply(user2,["uttar pradesh","noida"]);
let result = address.bind(user,"testing");
result("ulta pradesh");