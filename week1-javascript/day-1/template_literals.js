const msg = `` //template literals, multiline string

const name = 'Rohit singh'
const msg2 = `Welcome ${name}` //string interpolation

const msg3 = `
this is 
multiline 
string
<h1>Welcome to template literals session</h1>
<p>it can also contain html tags</p>
`

console.log(msg3)


//tagged fuctions

const greet = (strings, ...args)=>{
    return `Welcome ${args[0]}, How are you?`
}
const myname = 'Rohit singh'
const output = greet`Hello, My name is ${myname}`
console.log(output)