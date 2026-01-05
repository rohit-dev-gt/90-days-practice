
//trying to access variable before declaration

//console.log(username,password) //error as variable created by let keyword can not be accessed before its initilization
let username ='rohit'
let password = 'rohit@123'

//console.log(username,password) //thats correct


//const can also not be used before intialization
const ROI = 10 //const must be initilized, value can not be changed later, constants

// function hello(){
//     console.log(ROI) //prints 10, const can be accessed inside function

    
    
// }

function hello(){
    console.log(ROI) //NOW IT WILL GIVE ERROR because when constant or variable declared with same name inside the function always has priority  to be accessed first so here ROI found inside function not outside
    const ROI = 15
    console.log(ROI)
    
    
}


hello()

// block scope


function myFunction() {
  let x = 10;
  if (true) {
    let y = 20; // Block-scoped
    console.log(x); // 10 (accessible, in parent scope)
    console.log(y); // 20 (accessible, in same block)
  }
  console.log(x); // 10 (accessible, in parent scope)
  console.log(y); // ReferenceError: y is not defined (outside its block)
}
myFunction();



//function scope

//var are function scoped, but let and cost are block scoped


function myFunction() {
  var x = 10;
  if (true) {
    var y = 20; // Function-scoped
  }
  console.log(x); // 10 (accessible)
  console.log(y); // 20 (accessible within the same function)
}
myFunction();
console.log(x); // ReferenceError: x is not defined (outside the function)'

//function and arrow functions

//basic fucntion

function helloworld(){ //function declaration
  
    
}

//arrow function 

const helloworld1 = ()=>{

} //singl line