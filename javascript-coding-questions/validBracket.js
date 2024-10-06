const str = "{([])()}";

const validBracket = (str) => {
    const stk = [];
    for (let value of str) {
        // Push opening brackets to the stack
        if (value === "(" || value === '[' || value === "{") {
            stk.push(value);
        } 
        // For closing brackets, check the top of the stack for the matching opening bracket
        else {
            const peek = stk.pop(); // Pop the last opening bracket
            if ((value === ')' && peek !== '(') ||
                (value === ']' && peek !== '[') ||
                (value === '}' && peek !== '{')) {
                return false; // If not matching, return false
            }
        }
    }

    // After processing all characters, check if the stack is empty
    return stk.length === 0;
}

console.log(validBracket(str)); // Output: true
