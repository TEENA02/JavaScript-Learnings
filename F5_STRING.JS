const string1 = "A string primitive";
const string2 = '     Also a string primitive      ';
const string3 = `Yet another string primitive`;
console.log(string1);
const string4=new String("teenaSajwan");
console.log(string4[3]);
console.log(string4.__proto__);
console.log(string4.toUpperCase());
//console.log(string4.substring(0,4));
console.log(string4.slice(-4,-2));
console.log(string2.trimEnd());
const url="https://teena20.com/tena"
console.log(url.replace("20","09"));
console.log(url.includes("ina"));
//strring to array
console.log(string3.split(" "));