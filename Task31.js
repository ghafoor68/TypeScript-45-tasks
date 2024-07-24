"use strict";
// 31. No Users:
// Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
Object.defineProperty(exports, "__esModule", { value: true });
const all_users = ["guest", "administrator", "user", "root", "admin"];
// console.log(all_users.splice(0, all_users.length))
// console.log(all_users)
if (!all_users.length) {
    console.log("We Need to find some user");
}
else {
    //  pop method
    let i = all_users.length;
    while (i > 0) {
        all_users.pop();
        i--;
    }
}
//  remove all usernames from the array and print message 
console.log("Your username not exist in aarray" + all_users);
// if(all_users.length===0){
// console.log("We Need to find some user")
// }
