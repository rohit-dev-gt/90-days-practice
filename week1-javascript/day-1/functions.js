//normal functions

//function declaration
function fun(){
    //statements
}

//function expression
const fun1 = function(){
    //statements
}


//arrow function

const getInfo = (param1,param2)=>{
    //statements
}

//this keyword in normal functions

//this keyword in normal function represents to the same object of itself

const userdata = {
    name:'Rohit singh',
    age:30,
    showInfo:function(){
        console.log(`${this.name} is ${this.age} years old `)
    }
}
userdata.showInfo()

//this keyword in arrow functions represents the window object

const u1 = {
    name:'Rohit singh',
    age:30,
    showInfo:()=>{
        console.log(this.name)

        console.log(this)
    }
}

u1.showInfo() //undefined as this keyword represent to its surrounding scope, they don't bind with their own keywords

//together

const userinfo = {
    name:'Rohit singh',
    age:20,
    showInfo:function(){
        const show = ()=>{
            console.log(this.name) //now it can access the current object as in this
        }
        show()
    }
}

userinfo.showInfo()

//default parameters: when parameter is not defined

function greeting(name='Sir/Madam'){
    console.log(`Good morning ${name}`)
}

greeting('Rohit singh')
greeting()
//Rest parameters  = undefinite number of parameters to the function

function arraySum(...numbers){
    let sum = 0
    for(i=0;i<numbers.length;i++){
        sum +=numbers[i]
    }
    console.log(sum)
}

arraySum(1,2,3)
arraySum(4,5,6,7,8)
