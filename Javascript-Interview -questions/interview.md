## Question 1. What's the difference between undefined and not defined in JavaScript
<details><summary><b>Answer</b></summary>

- **undefined**:
  1. If you access the variable before declaration, it will be `undefined`.
  2. This will happen only with variables declared using `var`.

   ```javascript
   console.log(x); // undefined
   var x = 10;


