//!  Write a JavaScript program to reverse a given string. 

const reverse1=(str)=>{
   let result="";
   for(let i=str.length-1;i>=0;i--){
    result+=str.charAt(i);
   }
   return result;
}
reverse1("samadhan")


const reverse2=(str)=>{
   return str.split('').reverse().join('')
}

reverse2("samadhan")