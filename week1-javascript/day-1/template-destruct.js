//template literals
const msg = `welcome to first day of practice`;
const greetings = `
hi, how are you!
hope you're good
`
//string interpolation
let name = 'Rohit singh'
let age = 20

const default_msg=  `Hi, ${name}, you're ${age} years old`
console.log(default_msg)


//destructuring of arrays
const users = ['Rohit','Sumit','Abhinav']
const [u1,u2,u3] = users
console.log(u1,u2,u3)


//destructuring object
const user = {username:'Rohit sing',userage:20}
const {username,userage} = user
console.log(username,userage)
