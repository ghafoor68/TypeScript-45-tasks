// 39. City Names:
// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country (city1:string,city2:string,city3:string,country1:string){
    return `${city1} ${country1}`
    }

    //  first call 
    const citynames=city_country("Hala","Hyderabad","Karachi","Kashmir")
    console.log(citynames);
   //  second call 
   console.log(city_country("Saudia Arabia","Kuwait","Oman","Palestine")) 