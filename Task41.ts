// 41. Magicians: 
// Make an array of magician’s names. Pass the array to a function called show_magicians(), which 
// prints the name of each magician in the array


let magician: string[] = ["brad", "Rameez", "Ainak wala Jinn"];

function show_magicians(magician: string[]){
    magician.forEach(magician => {
        console.log(magician);  
    });
}