//let declaration declares re-assignable, block-scoped local variables,
//var do nto support bloc scope
let x = 9;
//

//Block and nested scope global scope and closure! =techniques
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    const website = "teena.com";
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  //console.log(website); results in referenece error

  displayName();
}
init();

//   init() creates a local variable called name and a function called displayName().
//    The displayName() function is an inner function that is defined inside init() and
//     is available only within the body of the init() function.
//      Note that the displayName() function has no local variables of its own. However,
//   since inner functions have access to the variables of outer scopes,
//    displayName() can access the variable name declared in the parent function, init().

function addone(num) {
  return num + 1;
}
addone(1);
const addtwo=function(num){ //in this type declartion the func can be accessed before , if did causes referenece Error
    return num+2
}
addtwo(2)
console.log(addone(11));
console.log(addtwo(11));