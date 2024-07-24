"use strict";
// 34. Pizzas:
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza, you like and then an additional sentence, such as I really love pizza!
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_names = ["Greek Pizza", "Detroit Pizza", "Neapolitan Pizza"];
//  print names of pizza list
pizza_names.map((value) => (console.log(value)));
const pizza_list = pizza_names.map((value) => (value == "Greek Pizza" ? `i like ${value}` : value));
console.log(pizza_list);
console.log("🍕 How Much you Like pizza 🍕 ");
console.log("You like Greek pizza 🍕 ");
console.log("I really love pizza 🍕❤️");
