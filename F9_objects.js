//singlton - one of its kind //one instance only through constructor 
//CONSTRUCTOR METHOD
//Object.create()
//OBJECT LITERALS 
const sym=Symbol("Key1")

const jsUser={
    name:"Teena",
    "age":23,
    gender:"female",
    Code:160045,
    [sym]:"ts"
}
// [sym]:"ts" using square bracket 
console.log(jsUser["age"]);
console.log(jsUser.sym);
console.log(typeof jsUser.sym);
jsUser.Code=123456 //change the value of key
//Object.freeze(jsUser)//no changes can be made on this 
jsUser.Code=111111
console.log(jsUser);

jsUser.greeting=function(){
    console.log(`hello user!!  ${this.name}`);//this to refer the keys inside the oject
    
}
console.log(jsUser.greeting());

