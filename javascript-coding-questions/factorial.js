//!  Write a JavaScript program to calculate the factorial of a given number. 

const factorial=(num)=>{
   if(num===0 || num===1)return num;

   return num*factorial(num-1);
}
factorial(6);