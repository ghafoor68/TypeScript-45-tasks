"use strict";
// 32. Checking Usernames:
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
Object.defineProperty(exports, "__esModule", { value: true });
const current_users = ["guest", "administrator", "user", "root", "admin"];
let new_users = [...current_users];
//  only 5 users copy 
console.log(new_users);
//  one user also add in list of current users
current_users.push("stduser");
for (let i = 0; i < new_users.length; i++) {
    if (new_users[i] === "guest" && new_users[i] === "GUEST" ||
        new_users[i] === "administrator" && new_users[i] === "ADMINISTRATOR" ||
        new_users[i] === "user" && new_users[i] === "USER" ||
        new_users[i] === "root" && new_users[i] === "ROOT" ||
        new_users[i] === "admin" && new_users[i] === "ADMIN") {
        console.log("username already exist enter new username");
    }
    else {
        console.log("username available");
    }
}
//  other method 
for (let i = 0; i < new_users.length; i++) {
    if (new_users[i].includes(new_users[i].toLowerCase()) || new_users[i].includes(new_users[i].toUpperCase())) {
        console.log("username already exist enter new username");
    }
    else {
        continue;
        console.log("username available");
    }
}
