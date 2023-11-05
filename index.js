// given an array ot integers, find the sum of all even numbers.


sums = (numb)=>{

    let sum = 0;
    let i;
    for(i=0;i<numb.length;i++){
        if(numb[i]%2===0){
            sum +=numb[i];
        }
    }
    return sum;

}



const number = [1,2,3,4,5,6,7,8,9,10,12,14,13,12];

const pass = sums(number)

console.log(pass);




