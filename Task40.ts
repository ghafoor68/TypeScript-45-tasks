// 40. Album:
// Write a function called make_album() that builds an Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//  object creation 
let album1={
    artist_name:"Rocky",
    album_title:"KGF2"
}
let album2={
    artist_name:"Salman Khan",
    album_title:"Tiger zinda h ",  
}
function make_album(obj:{artist_name:string,album_title:string},track_number:any){
    track(track_number)
    return `${obj.artist_name}\t${obj.album_title}`;
}
// another function 
function track(n:number){
    console.log(`number of tracks ${n}`)
}
console.log(make_album(album1,5))
console.log(make_album(album2,7))