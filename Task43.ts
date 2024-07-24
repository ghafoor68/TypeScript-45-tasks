// 43. Unchanged Magicians: 
// Start with your work from Exercise 42. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the 
// original names and one array with the Great added to each magician’s name.

import { log } from "console";


let magicians: string[] = ["Alice", "Eric", "Charley"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magicians => {
        greatMagicians.push(`${magicians} the Great`);
    });
    return greatMagicians;
}

function show_magicians(magicians: string[]) {
    console.log("Magicians:");
    magicians.forEach(magician => {
        console.log(magician);
    });
}


console.log("Original magicians:");
show_magicians(magicians);

let greatMagicians = make_great(magicians.slice());
console.log("Great magicians:");
show_magicians(greatMagicians);