//!  Given a string, write a function to count the occurrences of each character in the string. 

 const str="abcdsd";
 
 const frequency=(str)=>{
    const freObj={};
 
    for(let key of str){
        freObj[key]=(freObj[key] || 0)+1;
    }
    
    console.log(freObj)
  }
 
  frequency(str)


  //! Use hashmap

  const frequency1=(str)=>{
    const map=new Map();

    for(let key of str){
        if(map.has(key)){
            map.set(key,map.get(key)+1);
        }
        else {
            map.set(key,1)
        }
    }
    console.log(map)
  }
  frequency1(str)


  //!  use reduce method below

  const arr=["hello","javascript","Hello","java","javascript","HTML"];

  const ans=arr.reduce((allValues,currValue)=>{
     if(value in allValues){
        allValues[value]++;

     }
     else {
        allValues[value]=1;
     }

     return allValues
  },{})

  console.log(ans)

