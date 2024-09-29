//! sort array ascending order
const arr = [3, 4, 5, 7, 2, 3, 1, 22, 3];
arr.sort((a, b) => a - b);
console.log(arr);

//! sort array descending order
const arr2 = [3, 4, 5, 7, 2, 3, 1, 22, 3];
arr2.sort((a, b) => b - a);
console.log(arr2);

//! sort string array

const strArr = ["samadhan", "rushi", "nitin", "aaba", "pappu"];
strArr.sort();
console.log(strArr);

//! sort the obj

const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

people.sort((a, b) => a.age - b.age);
console.log(people);

//!  bubble sort
const arr3 = [3, 4, 5, 7, 2, 3, 1, 22, 3];

for (let i = 0; i < arr3.length - 1; i++) {
  for (let j = 0; j < arr3.length - i + 1; j++) {
    if (arr3[j] > arr3[j + 1]) {
      let temp = arr3[j];
      arr3[j] = arr3[j + 1];
      arr3[j + 1] = temp;
    }
  }
}
console.log(arr3);
