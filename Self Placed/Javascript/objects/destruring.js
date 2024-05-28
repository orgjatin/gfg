
let emp = {
    employees :{
        name:"Jatin",
        achi:{
            first:"Top winner",
            second:"Top performer",
            third:"Top leader"
        }
    }
}

let {employees:{achi:{second,third}}} = emp;
console.log(second,third);