let score = "33aa";
// console.log(typeof score);
// let scoreInNum=Number(score);
// console.log(typeof scoreInNum);
// console.log(scoreInNum);

// 33-> Number
// 33as -> NaN
//  let islogin="33";
//  let checklogin=Boolean(islogin);
//  console.log(typeof checklogin);
//  console.log(checklogin);
/* 
 if the string is empty "" the boolean will be false 
 else in any case true 
 "33"->33 
 */
//-----------OPERATIONS ----------------//
//  let val=3
//  let negval=-val
//  console.log(negval);
//conversion toPrimitive based on ECMA script rules
console.log("1" + 2 + 2); //122

console.log(1 + 2 + "2"); //32
//prefered type will be converetd
let cnt = 100;
++cnt;
console.log(cnt);
cnt++;
console.log(cnt);

/*
 if a++ the operator increments and returns the value before incrementing
 if ++a the operator incremnets and return the value after incrementing 
  */
let x = 8;
let y = x++;
console.log(`x is ${x} and y is ${y}`);
let a = 8;
let b = ++a;
console.log(`a is ${a} and b is ${b}`);
//loose chec and strict checl
//== ===
/*console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
console.log(null < 0);
console.log(null <= 0);
console.log(null != 0);*/

//summary 
/*classified on the basis  how stored and access 
primitive and non primitive 
PRIMITIVE => call by value (u havee a copy)
    String,Number , Null,Boolean ,Symbol, Undefined,BigInt
NON-PRIMITIVE OR REFERENCE TYPE
    Arrays, Objects ,Functions
*/
//Dynamically-typed languages are those (like JavaScript) 
//where the interpreter assigns variables a type at runtime based on the variable's value at the time
const id=Symbol('123')
const id2=Symbol("123")
console.log(id === id2)
  const heros=["shatiman ","doga","gogo"];
let myobj={
    name:"teena",
    age:21
}
const myFun=function (){
    console.log("Hi i m inside the function")   
}
myFun();
console.log(typeof myFun);// function
console.log(typeof heros);// object
console.log(typeof myobj);// object


