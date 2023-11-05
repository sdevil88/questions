//reverse string in js 



// create function 

rev=(str)=>{
console.log("total word : ",str.length)
console.log(" your word :" , str)

let word = "";
let i ;
// reverse count loop
for(i=str.length-1;i>=0;i--){
    
    

    word += str[i];

}
return word;

}

const str = "sagarijpoifjs";
const pass = rev(str);
console.log("reverse word : ",pass);



