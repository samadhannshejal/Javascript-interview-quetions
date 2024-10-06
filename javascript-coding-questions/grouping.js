//! Group items on the basis of age of given array of object ?

const arr = [
  { name: "samadhan", age: 100 },
  { name: "thor", age: 105 },
  { name: "Hulk", age: 200 },
  { name: "antman", age: 100 },
];

//! used for of loop

const grpByAge=(arr)=>{
    const result={};
    for(let value of arr){
        if(result.hasOwnProperty(value.age)){
            result[value.age].push(value);
        }
        else {
            result[value.age]=[value];
        }
    }

    console.log(result);
}

grpByAge(arr);


//! use reduce method 

const result =arr.reduce((result ,value)=>{
      if(value.age in  result){
        result[value.age].push(value);
      }else {
        result[value.age]=[value];
      }

      return result;
},{})

console.log(result)