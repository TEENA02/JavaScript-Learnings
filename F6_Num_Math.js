const num=100
console.log(num);
//explicitly can define the data type
const bal=new Number(199)
console.log(bal.toFixed(2));
console.log(num.toString());
//to fixed for precision values 
const nums=1000000000
console.log(nums.toLocaleString());
//console.log(nums.toLocaleString('en-IN'));
//===========MAths library
console.log(Math.abs(-18289));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.round(23.11));
console.log(Math.round(Math.random()*10));
const min=10;
const max=30;
const x=Math.floor((Math.random()*(max-min+1)))+min
console.log(x);