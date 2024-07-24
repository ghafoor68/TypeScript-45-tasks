// 18. Seeing the World:
// Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

//  original array 
let places:string[]= ["Hyderabad","Karachi","Islamabad","Kashmir","Balochistan"];
//  form create a new array copies
//let e =Array.from(places);

//  sorted function 
function sortalphabet(location:string[],order:number):string[]{
   if(order===0){
    return [...location].sort() 

   }
else{
    return [...location].reverse();
}
    }
    
// without sorting alphabet
console.log(places)
//  with sort
  console.log(sortalphabet(places,0))
//   Show that your array is still in its original order by printing it.
 console.log(places)
//  reverse alphabet
let e=sortalphabet(places,1); 
console.log(e)
//  print original array 
console.log(places)

// 

console.log(Object.keys(e).reverse())
console.log(Object.keys(places))