// 0,1,1,2,3,5,8,13,21,34,56
// 0,1,2,3,4,5,6,7, 8, 9, 10

//! Write program for fibonacci series

const fibSeries = (number, arr) => {
  if (number < 2) return arr;

  const newNumber = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(newNumber);
  return fibSeries(number - 1, arr);
};

console.log(fibSeries(8, [0, 1]));

//! Return particular fib number  for given number

const singleFib=(number)=>{
     
    let a=0,b=1;
    for(let i=2;i<=number;i++){
        let temp=a+b;
        a=b;
        b=temp;
    }
    return b
}

console.log(singleFib(8))
