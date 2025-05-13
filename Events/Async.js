 const { timeout } = require("async")

//javascript is synchronous and single threaded (default)
// execution context 
// execute one line of code at a time
// console log --> 1
// console log--> 2
// i.e each operation waits for the last one to complete before executing



//Blocking code VS Non Blocking code
//blocking code blocks the flow of program-->read file sync ( like wait for me until i bring  my cup of tea)
// Non Blocking code
//does not block excecution --> read file async ( registration example)

