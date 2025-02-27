const accoutId=12345 //not able to change later
let accountEmail="teena@gmail.com" //
var accountPassword="1212" //not used nowdays, due to scope 
accountCity="Delhi" 
// accoutId=123456
console.log(accoutId);
accountEmail="ts@gmail.com"
accountCity="chd"
let acc;
console.table([accoutId,accountEmail,accountPassword,accountCity,acc])
/*
prefer not use var 
because of issue in  block and fun scope 
*/
// ┌─────────┬────────────────┐
// │ (index) │ Values         │
// ├─────────┼────────────────┤
// │ 0       │ 12345          │
// │ 1       │ 'ts@gmail.com' │
// │ 2       │ '1212'         │
// │ 3       │ 'chd'          │
// └─────────┴────────────────┘
 