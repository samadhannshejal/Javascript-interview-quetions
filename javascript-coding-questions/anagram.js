//! 9. Write a function that determines if two strings are anagrams of each other  
const str1="listen";
const str2="entsil";
const checkAnagram=(str1="",str2)=>{
    if(str1.length!==str2.length)return false;


     const tempArr=str1.split('')
     console.log(tempArr)
     for(let i=0;i<str2.length;i++){
        const ch=str2.charAt(i);
        if(!tempArr.includes(ch))return false
     }


     return true
}
 console.log(checkAnagram(str1,str2)) 