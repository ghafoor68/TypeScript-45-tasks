// 22. Intentional Error:
// If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

//  index out of range 
const languages:string[]=["c++","java","python"]

// Total 3 index values 
//  if use -1 values then 

console.log(languages.indexOf('python'))

// so last index 2 
console.log(`${languages[3]}`)