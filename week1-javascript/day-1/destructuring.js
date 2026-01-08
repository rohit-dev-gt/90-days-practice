//array destructure
const marks = [100,200]
//const [a,b] = marks
//console.log(a,b)

//object destructure
const person = {
    name:'Rohit',
    age:20
}
const {name,age} = person
console.log(`${name} is ${age} year old`)
//nested destructuring
//array
const arr = [[1,2],[3,4]]
const [[a,b],[c,d]] = arr
console.log(a,b,c,d)

//object
const person2 = {
    name:'Rohit',
    phones:[9555199515,8877665566]
}
//
const {person_name,phones:[primary,secondary]} = person2
console.log(`${person_name} has primary phone : ${primary} and secondary phone: ${secondary}`)

//default values in destructuring
//arrays
const nums = [1,2]
const [alpha,beta,gamma=30,theta=40] = nums 
console.log(alpha,beta,gamma,theta) //gamma and theta will have defautl values of 30 and 40 

//if nums has value for gamma, it will be assign to gamma otherwise it will take default value 

//in objects
const p1 = {
    myname:'Rohit Singh' 
}

const {myname,myage=20} =  p1
console.log(myname,myage)

//Rest parameters in destructuring

const students = ['Rohit','Richa','Komal','Amitabh bacchan','Shahrukh']

const [topper,...others] = students

console.log(`The topper is ${topper}`)
console.log(others)

//rest in object
const profile = {
    userid:10032323,
    username:'the_fast_learner',
    name:'Rohit singh',
    phone:6832453434,
    email:'rohitdevofficial@gmail.com'
}
const {userid,username,...other_details} = profile

console.log(userid,username,other_details)