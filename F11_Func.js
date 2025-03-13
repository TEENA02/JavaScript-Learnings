function banene(){
    console.log("hi its here ");
    
}
//banene this reference to func
//benene() this excutes the func
//banene()
function add(x,y){
    console.log(x+y);
    
} // here the return type is undefined

add(2,"S")
function sum(x,y){
     return (x+y)
    
}
const ans=sum(3,4)
console.log(ans);
function login(username="Sam"){
    if(username==undefined){
            return
    }
   return `${username} logged in `

}
console.log(login()); // this return  undefined logged in
console.log(login("teena")); 

//FUNCTION AND oBJECTS 

//The rest parameter syntax allows us to represent an indefinite number of arguments as an array ...
function mul(mul, ...args){
    return args.map((x)=>x.mul)
}
const ans1=mul(2,1,2,3)
console.log(ans1);

const x={
    name:"teena",
    age:12
}
function user(users){
    console.log(`the username is ${users.name} and age is ${users.age}`);
    
}
user(x);
const array1=[11,1,21,2,3]
function return2value(arr){
    return arr[1]
}
console.log(return2value(array1));
