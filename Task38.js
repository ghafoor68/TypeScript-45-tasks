"use strict";
// 38. Cities:
// Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
Object.defineProperty(exports, "__esModule", { value: true });
//  one default country value but one is not default
function describe_city(city1, city2, city3, country1, country2 = "Saudia Arabia") {
    console.log(`${city1} city in ${country1}`);
    console.log(`${city3} city in ${country2}`);
    console.log(`${city2} not city in ${country2}`);
}
describe_city("Hyderabad", "Karachi", "Hala", "Kashmir");
