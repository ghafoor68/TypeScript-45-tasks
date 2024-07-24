"use strict";
// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Abdul ghafoor";
// printing a person name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// printing a person name in upperercase
console.log("Uppercase:", personName.toUpperCase());
// printing a person name in titlecase
console.log("Titlecase:", personName.charAt(0).toUpperCase() + (personName.slice(1, 5)) + " " + personName.charAt(6).toUpperCase() + (personName.slice(7, 14)));
