//reverse string in js 



// create function 

//rev=(str)=>{
// console.log("total word : ",str.length)
// console.log(" your word :" , str)

// let word = "";
// let i ;
// reverse count loop
// for(i=str.length-1;i>=0;i--){
    
    

//     word += str[i];

// }
// return word;

// }

// const str = "hello world";
// const pass = rev(str);
// console.log("reverse word : ",pass);


//reverse string method 2

function reverseString(word){
    return word.split('').reverse().join('');
}
const value = "hello world";

const pass = reverseString(value);

console.log(pass);



