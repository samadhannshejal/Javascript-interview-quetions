## Question 1. What's the difference between undefined and not defined in JavaScript

- **undefined**:

  - Case 1

  1. If you access the variable before declaration, it will be `undefined`.
  2. This will happen only with variables declared using `var`.

  ```javascript
  console.log(x); // undefined
  var x = 10;
  ```

  - case 2

  1.  if variable is declare but still not initialize , it will be `undefined`.

  ```javascript
  let x;
  console.log(x); // undefined
  ```

- **not defined** :
  Variable is not defined in current scope , still you access it , so it will be not defined ( throw reference error)

  ```javascript
  console.log(x); // reference error - not defined
  ```

## Question 2. What is the drawback of declaring methods directly in JavaScript objects ?

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    console.log(`My name is ${this.name} and my age is ${this.age}`);
  };
}
const person1 = new Person("samadhan", 25);
const person2 = new Person("baluDon", 25);
person1.info();
person2.info();
```

1. In above case ever time you create new object the method is also recreate in memory , this is increase memory
2. Every time at of obj creation function is recreated and local execution context is created and its push into call stack so it's
   take more memory

- **solution** :
  Use prototype , its shared to all instance

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.info = function () {
  console.log(`My name is ${this.name} and my age is ${this.age}`);
};
const person1 = new Person("samadhan", 25);
person1.info();
```

## Question 3. What is “closure” in javascript? Can you provide an example?

1. A closure in javascript is feature where inner function has access of variables present in outer function even if finished execution of outer function
2. its remember the environment was created by outer function

```javascript
function outerFun() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}
const fun1 = outerFun();
fun1();
```
## Question 4. What will be the output of the following code?

```javascript
((x)=>{
 delete x;
 console.log(x);  // 2
})(2)
```
1. delete operator cannot delete local variables or functions parameters 
2. delete operator works on properties of object

## Question 5. What will be the output of the following code?
```javascript
const Employee={
   company:'xyz'
}
const emp1=Object.create(Employee);
delete emp1.company;
console.log(emp.company) // xyz
```
- In above code emp1 is created as new object and inherit property from Employee object
- It means emp1 does'nt have own property called company, so it wont be delete 
- Its inherit property from Employee object which present in prototype 
- delete operator does'nt work on prototype property 
```javascript
// you can delete property  by accessing prototype
delete emp1.__proto__.company
```` 


