// const user = {
//   name: "John",
//   // Arrow function inherits 'this' from the global/window scope
//   logNameArrow: () => {
//     console.log(this.name);
//   }
// };
// // In a browser's global scope, 'this' is 'window', which likely has no 'name' property
// user.logNameArrow(); // Output: undefined (or empty string, depending on environment)

const user = {
  name:"Rohit dev",
  logName:function(){
    console.log(this.name)
  }
}

user.logName()