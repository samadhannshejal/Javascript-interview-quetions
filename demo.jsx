//! Closures

// const parentFun=()=>{
//     let outerVariable="I am outside"
//     const innerFun=()=>{
//         console.log(outerVariable)
//     }
//     return innerFun
// }
// const child=parentFun();
// child()

//! This keyword

//! Global Object:-

//  function fun(){
//     console.log(this)
//  }
//   fun()  | window.fun()

//! Objects methods : -

// const obj={
//     name:"samadhan",
//     func:function(){
//         console.log(this) // object itself
//     }
// }
// obj.func(); // function called as method of object


// const obj2={
//     name:"samadhan",
//     func:function(){
//         console.log(this) // global object
//     }
// }
// const fun1=obj.func(); // function called as method of object
// fun1()

//! Constructor function
// function Person(){
//     console.log(this); // pointing towards to newly created object from instance
//  }

// const person= new Person()
// person.name="samadhan"

//! Arrow function

// const fun=()=>{
//     console.log(this) // global 
//   } 
//   fun()

// const obj={
//     name :"samadhan",
//     func:()=>{
//        console.log(this)// global
//     }
//   } 
//   obj.func() 

// const obj={
//     name :"samadhan",
//     func:function(){
//       const innerFun= ()=>{
//        console.log(this)// obj itself m, its this inherit from surrounding context
//     }
//     innerFun()
//     }
//   } 
//   obj.func() 

//! prototypes

// const person = {
//   greet:function() {
//     return `Hello, my name is ${this.name}`;
//   },
// };
// const person2 = {
//   greet:function() {
//     return `Hello, my name is ${this.name}`;
//   },
// };


// const student = Object.create(person);
//  // student inherits from person

//  student.name = "Samadhan";
//  console.log(student)

// console.log(student.greet()); // "Hello, my name is Samadhan"

// console.log(document)

// console.log(x)

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.info = function () {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    };
  }
  
  const person1 = new Person("samadhan", 25);
  const person2=new Person ("karodMan",30)
  person2.info()
  person1.info();

