
// hoisted

// function exceution

// temporal dead zone

let foo = 20;

(function(){
    console.log(foo);
    let foo = 20; 
})() 
