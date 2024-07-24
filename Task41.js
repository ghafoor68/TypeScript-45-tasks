"use strict";
// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ["brad", "Rameez", "Ainak wala Jinn"];
function show_magicians(magician) {
    magician.forEach(magician => {
        console.log(magician);
    });
}
