// 24. More Conditional Tests:
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in an array
// • Test whether an item is not in an array

let str1:string="typescript";
// let str2:string="TYPESCRIPT";
let str2:string="typescript";
// equality +inequality
console.log(str1===str2)
console.log(str1!=str2?true :false)

//  lower case function
console.log(str1.toUpperCase()===str2.toLowerCase())

//  work with numbers and Logical operator 
 let  mark:number=90;

console.log(mark>=90?"A+": "Decide Later")
//  
console.log(mark>=85 && mark==90?"A+": "B")

let vhicle:string="car"
console.log(vhicle==="car"||vhicle==="cycle"?true:false)

const arr:Array<Number>=[1,2,3,4]

console.log(arr.includes(4,3)?"find":"Not found");

console.log(arr.includes(5)?"find":"Not found");