let res = [];

function string(str){

  const splitWords = str.split(" ");

  for (let word of splitWords){
    
    const revWords = word.split("").reverse().join("");
    
    res.push(revWords);
    
}

return res.join(" ");

}

const sentence = "This is a sentence with some words";

const result = string(sentence);

console.log(result);


 

