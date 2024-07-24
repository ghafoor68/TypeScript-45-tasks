// 17. Shrinking Guest List:
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


//  change program Task16.ts 
//  expand this 
let friend_new =["Asghar","Rizwan","Nazeer","Kamran"];
//  add start index first 
//  friend_new.splice(0,0,"Rizwan")
//  friend_new.splice(2,0,"Kamran")
//  friend_new.push("imran")
let show_new:boolean=true;

//  var index = friend_new.indexOf('Nazeer');
//  console.log(index)
let index= friend_new.length;
console.log(index)
console.log("you can invite only two people for dinner")
for(let i=0;i<friend_new.length;i++)
{
    if(index>2) 
  {
    console.log(` you’re sorry you can’t invite them to dinner. ${friend_new[0]}`)
    friend_new.splice(0,1)
   }
}

console.log(` you are invite them to dinner. ${friend_new}`)
friend_new.pop()
friend_new.pop()
console.log(friend_new)
//  console.log("Biger Dinner Table total people "+friend_new.length)
