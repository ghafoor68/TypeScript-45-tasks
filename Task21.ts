// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// generic array type Array<elementtype>
// let mountain:Array<string>=["K2","Takht-e-Sulaiman","Nanga Parbat"];
// let rivers:Array<string>=["Indus","Kabul","Jehlum"];
// let language:Array<string>=["Arabic","Sindhi","Urdu"];
// let countries:Array<string>=["Palestine","Saudia Arabia","Kuwait"];
// similar to array declare in javascript
// let city:string[]=["Hala","Hyderabad","Karachi"];

type objtype={
    name1:string,
    name2:string,
    name3:string
}

const listarray:Array<objtype>=[
//  first assign to mountain
    {
    name1:"K2",name2:"Takht-eSuleman",name3:"Nanga Parbat"
},
//  second assign to rivers 
{
    name1:"Indus",name2:"Kabul",name3:"Jehlum"
},
//  third assign to languages
{
    name1:"Arabic",name2:"Sindhi",name3:"Urdu"
},
//  forth assign to countries
{
    name1:"Palestine",name2:"Saudia Arabia",name3:"Kuwait"   
},
//  fifth assign to cities
{
    name1:"Hala",name2:"Hyderabad",name3:"Karachi"
}
]

console.log(listarray)
//  acess any objects 
console.log(listarray[2])