//IIFE Immediately Invoked Function Expression

(function inti(){
    //named Iife
    console.log("DB Connected");
    
})();
//to avoid global scope pollution
((db)=>{
    //unnamed and parameter
    console.log("DB Connected2",db);
    
})('mongo')//ypeError: (intermediate value)(...) is not a function, to avoid apply semi colon at end