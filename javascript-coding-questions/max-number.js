//! Write a JavaScript program to find the maximum number in an array.

const array = [1, 5, 3, 8, 5, 9];

// sort the array return last element

const max1 = (arr) => {
  arr.sort();
  return arr[arr.length - 1];
};
// const ans1 = max1(array);
console.log(ans1);

//use max variable

const max2 = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
  }

  return max;
};
console.log(max2(array));

// use math.max

const max3 = (arr) => {
  return Math.max(...arr);
};
console.log(max3(array));


