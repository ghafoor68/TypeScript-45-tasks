"use strict";
// 36. T-Shirt:
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
Object.defineProperty(exports, "__esModule", { value: true });
//Anonymous Functions
let T_shirt = function (size, message) {
    return `${message} size no ${size}`;
};
// function call 
console.log(T_shirt(12, "Pain Is Weakness Leaving The Body shirt"));
