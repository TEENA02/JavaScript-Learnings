
/*
Date represents a single moment in time  a platform 
 */
let mydate=new Date();
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);
let newDate=new Date(2025,1,23,6,4)
// console.log(newDate.toString());

let myTimeStamp=Date.now();

let myTime=Date.now()/1000;
console.log(myTimeStamp);
console.log(newDate.getTime());
console.log(newDate.toLocaleString("default",{weekday:"long"}));