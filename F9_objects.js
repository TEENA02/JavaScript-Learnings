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
//console.log(jsUser);

jsUser.greeting=function(){
    console.log(`hello user!!  ${this.name}`);//this to refer the keys inside the oject
    
}
//console.log(jsUser.greeting());

const tinderUser={}
tinderUser.id="1123"
tinderUser.name="Rish"
tinderUser.isLogin=true
//console.log(tinderUser);
const user1={
    email:"teen@123mail.com",
    fullname:{

        firsTname:"sam",
        lastname:"page"
    }
}
console.log(user1);
console.log(user1.fullname?.lastname);
//OPTIONAL CHAINING
console.log(user1.fullname?.lastname);
const obj={
    1:"a",
    2:"b"
}
const obj1={
    3:"c",
    4:"d"
}
//CONCATING 2 OBJECTS 
//USING A THIRD OBJ TO CONCAT OBJ2={OBJ1+OBJ2} But this will result in a object inside a obj
const obj2={obj,obj1}
console.log(obj2);
// results in  { obj: { '1': 'a', '2': 'b' }, obj1: { '1': 'c', '2': 'd' } }
//USING SPREAD OPERATOR ...
const object3={...obj,...obj1}
console.log(object3);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// Object.assign() static method copies all properties from source objs to target objs
const x=Object.assign({},obj,obj1,jsUser)//empty obj is given so that all copied to inside it from other objs
console.log(x); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//how to retrieve keys and values and stores it in array
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//array inside a array
console.log(tinderUser.hasOwnProperty('isloggedIn')); //return a fboolean   

/*
[ 'id', 'name', 'isLogin' ]
[ '1123', 'Rish', true ]
 [ [ 'id', '1123' ], [ 'name', 'Rish' ], [ 'isLogin', true ] ]
*/

