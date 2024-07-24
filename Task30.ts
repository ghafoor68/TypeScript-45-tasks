// 30. Hello Admin:
// Make an array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const usernames:Array<string>=["guest","administrator","user","root","admin"]


//  for of loops return values  => for in loops return indexes
for(const i of usernames)
{
if(i==="admin")
{
console.log(`Hello ${i}, would you like to see a status report?`)
break;
}
else{
    continue; // not print this message
    console.log(`Hello ${i}, thank you for logging in again.`)
}
}