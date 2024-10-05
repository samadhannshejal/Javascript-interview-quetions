//! Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.

const flattenArray = (arr, result = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenArray(arr[i], result); // Recursive call for nested arrays
      } else {
        result.push(arr[i]); // Push the element if it's not an array
      }
    }
    return result;
  };
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, [6, 8, 6, 9, 30], 4, 99, 400];
  console.log(flattenArray(arr));