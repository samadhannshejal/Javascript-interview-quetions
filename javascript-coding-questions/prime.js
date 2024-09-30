//! Write a JavaScript function to check if a given number is prime.
const isPrime =(num)=>{
   if(num<=1)return false;
   for(let i=0;i<Math.sqrt(num);i++){
    if(num%i===0)return false;
   }


   return true
}

console.log(isPrime(9))