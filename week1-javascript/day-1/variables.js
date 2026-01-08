let name = 'Rohit singh'
let phone = 9555199515

const username = 'rohitsing_username'
const password= 'rohit@123'

//var keyword was used before let anc const, it defined variables but not constants
//variables declares with var keyword has hoisting feature, it can be accessed before its initialization


//var has function scope

var person = 'Rohit'

{
    console.log(person)
}


{
    var person1 = 'Rohit singh'
}
console.log(person1) //it can be accessed before 

//let and const has function scope

let person2 = 'Rohit singh'
{
    console.log(person2)
}

{
    let person3 = 'Amit kumar'
}
 
console.log(person3) //it can not be accessed as variable defined with let and constant defined by const has limited scope to its block


//temporal deadzone is nothing but the period of time of accessing a variable declared using let and cost before its initialization

//example

function helloworld(){

    console.log(msg)

    let msg = 'welcome to xyz' //tdz  ends here as it found the variable to be accessed

    console.log(msg)
}

