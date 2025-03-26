//for loop 
// for (initialization; condition; afterthought)
  //            statement
// for(;console.log("hi");){
//     console.log("inside the for loop");
    
// }
for (let index = 0; index < 4; index++) {
    const element = index;
    if(element==3){
        break;
    }
    console.log(element);
    
}
//-----------------------------------   Arrays ---------------------------------------------------
//FOR OF LOOP
// Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList
const arr=[1,2,3,4,44]
for (const i of arr) {
    console.log(i);
    
}
//stores in key val pair in unique 
const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
// for (const [key,val] of map1) {
//     console.log(val,key);
    
// }
const x={
    name:"manraj",
    cpp:"C++",
    rb:"ruby",
    js:"Javascrpit"
}
for (const key in x) {
  console.log(key,"->",x[key]);
  
}