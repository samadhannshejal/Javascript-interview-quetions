//! Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.

const array1=[1,4,6,8,9];
const array2=[3,6,8,11,22,45];

const mergeArray=(arr1,arr2)=>{
    const result=[];
    let i,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            result.push(arr1[i]);
            i++;
            
        }
        else{
            result.push(arr2[j]);
            j++
        }
    }

    while(i<arr1.length){
        result.push(arr1[i]);
        i++
    }


    while(j<arr2.length){
        result.push(arr2[j]);
        j++
    }
    console.log(result)
}
mergeArray(array1,array2)
