const arr=new Array(1,2,3,4)
arr.push(5)
//console.log(arr);
arr.push(8);
// console.log(arr);
// arr.pop()
//console.log(arr);
arr.unshift(0)// insert at the start of array
//console.log(arr);
const newarr=arr.join();//covert array into string
//console.log(newarr);
//slice
// console.log("A=",arr);
// const arr1=arr.slice(1,5)
// console.log("B=",arr1);
/* slice creates a new array containing selected elemnents from the originals while splice 
() modifies the original array by adding, removing or replacing elements
 */
const hero=["spiderman","ironman","thor","vision"]
const dc=["batman","superman","wonderWomen"]
// hero.push(dc)
// console.log(hero);

const ar=hero.concat(dc)
//console.log(ar);
//SPREAD OPERATOR  ...
const newHero=[...hero,...dc]
// console.log(newHero);
//if there are multple arrays in a array then its done by FLAT
const arr2=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realArr=arr2.flat(Infinity)
//console.log(realArr);
//isARRAY AND FROM Method to check and make array
// console.log(Array.isArray("teena"));
// console.log(Array.from("teena sajwan"));
//An iterable object to convert to an array.
/*[
    't', 'e', 'e', 'n',
    'a', ' ', 's', 'a',
    'j', 'w', 'a', 'n'
  ]
*/

//Interiew case SCenerio

//console.log(Array.from({name:"teena"}));// this will return  an empty object []


let score1=100
let score2=200
let score3=300
//console.log(Array.of(score1,score2,score3));//A set of elements to include in the new array object.Returns a new array from a set of elements.

//HIGHER ORDER FUNCTIONS
const code=["js","CPP","java","C","ruby"]
//The forEach() method of Array instances executes a provided function once for each array element.
code.forEach((x)=>{x=x+"-lol" 
  //console.log(x);
  
})
const myobj=[
  {
    age:23,
    gender:"M"
  },
  {
    age:22,
    gender:"F"
  },
  {
    age:20,
    gender:"M"
  },
  {
    age:13,
    gender:"F"
  },
]
myobj.forEach((x)=>{
  console.log(x.age,x.gender);
  
})
function pt(item) {
  console.log(item);
  
}
code.forEach(pt)
code.forEach((item,index,arrlist)=>{
console.log(item,index,arrlist);

})

//output
// js 0 [ 'js', 'CPP', 'java', 'C', 'ruby' ]
// CPP 1 [ 'js', 'CPP', 'java', 'C', 'ruby' ]
// java 2 [ 'js', 'CPP', 'java', 'C', 'ruby' ]
// C 3 [ 'js', 'CPP', 'java', 'C', 'ruby' ]
// ruby 4 [ 'js', 'CPP', 'java', 'C', 'ruby' ]