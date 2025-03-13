//this is used to refer the current context in a  object method only not in func

const user={
    username:"Demo",
    x:function() {
        console.log(`${this.username}`)

    }
}
user.x();
// user.username="teena"
// user.x()
// user.x(this)
// //Global object in browser is window
// function demoObject(){
//     console.log(this);
    
// }
// demoObject()

const chai=()=>{
    let username="DEMOUSER"
    console.log(this); //{}
    
}
chai()
const f1=(x,y)=>{
 return x+y
}
console.log(f1(2,3));

//implicit 
//using curly braces use return keyword 
//without curly braces not required
const sun=(num1,num2)=> num1+num2
sun(229,33)