// 15. Changing Guest List:
// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.

// Name = Abdul Ghafoor 
// Today Date = 7/7/2024
let friend_guest:string[] =["Ahmed","Ali","Babar"];
for(let i=0;i<friend_guest.length;i++)
{
    if(friend_guest[i]=='Ali')
    {
console.log("Ali not invited to dinner")
// replacing new frined invite list 
// splice first index show 
// splice second 1 delete if 0 then no delete 
friend_guest.splice(3,0,"Nazir")
    }
    else
    {
        console.log(`i invited to ${friend_guest[i]} dinner `)
    }
}

console.log(friend_guest)