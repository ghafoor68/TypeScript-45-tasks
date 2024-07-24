// 27. Alien Colors #3:
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.


let alien_color="red";

if(alien_color==="green"){
    //  change color 
    console.log( "\u001b[1;32m Player just earn 5 points" );    
}
else if(alien_color==="red")
{
    console.log( "\u001b[1;31m Player just earn 15 points " );
}

else if(alien_color==="yellow"){
    console.log( "\u001b[1;33m Player just earn 10 points" );
}
else{

}
//  default Foreground color

console.log( "\u001b[0m " );