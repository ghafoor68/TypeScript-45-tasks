"use strict";
// 39. City Names:
// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.
Object.defineProperty(exports, "__esModule", { value: true });
function city_country(city1, city2, city3, country1) {
    return `${city1} ${country1}`;
}
//  first call 
const citynames = city_country("Hala", "Hyderabad", "Karachi", "Kashmir");
console.log(citynames);
//  second call 
console.log(city_country("Saudia Arabia", "Kuwait", "Oman", "Palestine"));
