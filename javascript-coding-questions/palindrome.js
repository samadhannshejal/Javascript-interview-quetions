//! Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

const checkPalindrome=(str)=>{
   let i=0,j=str.length-1;
   while(i<=j){
    const char1=str.charAt(i)
    const char2=str.charAt(j);
    if(char1!==char2)return false;

    i++;
    j--;
   }
   return true;
}

console.log(checkPalindrome("abccba"));


const checkPalindrome2=(str)=>{
   console.log(str.split(""))
   return str===str.split("").reverse().join("")
}
checkPalindrome2("abccba")