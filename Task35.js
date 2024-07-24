"use strict";
// 35. Animals:
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
Object.defineProperty(exports, "__esModule", { value: true });
let animals = new Array(3);
animals = ["bats", "whales", "hamsters"];
for (let i of animals) {
    //  print names of animals
    console.log(i);
    if (i == "hamsters") {
        console.log(`A hamsters would make great pet`);
    }
}
//  common chareacteristics 
console.log("\nAlmost all mammals give birth to live babies.\nThey are endothermic, or warm-blooded.");
console.log(`${animals[0]} ${animals[1]} ${animals[2]} these animals would make great pet`);
