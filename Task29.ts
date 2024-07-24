// 29. Favorite Fruit:
// Make an array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

let favorite_fruits:string[]=["apple", "orange", "banana"];
let favorite_fruits2:string[]=["pongrate", "peer", "grapes"];

console.log(favorite_fruits);

if(favorite_fruits[0]==="peer")
{
console.log(`You dont like ${favorite_fruits[0]}`)
}
else if(favorite_fruits[1]==="grapes")
{
console.log(`You dont like ${favorite_fruits[1]}`)
}
else if(favorite_fruits[2]==="banana")
{
console.log(`You like this ${favorite_fruits[2]}`)
}
else{
console.log(`You dont like any fruits`)   
}