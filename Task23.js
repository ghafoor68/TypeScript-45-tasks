"use strict";
// 23. Conditional Tests:
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'Subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
Object.defineProperty(exports, "__esModule", { value: true });
//  Conditional test 
//  true => pass && false => fail
//  10 test
//  divide three category 
//  1=> Top 
//  2=> Pass
//  3=> Fail
let marks = 90;
console.log(marks >= 90 ? "A+" : "Decide Later");
//  
console.log(marks >= 85 && marks == 90 ? "A+" : "B");
console.log(marks >= 75 && marks <= 85 ? "B" : "C");
console.log(marks >= 65 && marks <= 74 ? "C" : "D");
console.log(marks >= 55 && marks <= 64 ? "C" : "D=> Fail");
console.log(marks < 55 ? "Fail" : "D");
console.log(marks != 90 ? true : false);
let vehicle = "car";
console.log(vehicle === "car" || vehicle === "cycle" ? true : false);
// all logical operator 
