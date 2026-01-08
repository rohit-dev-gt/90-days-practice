const s = ['rohit','amit']
const n = [...s] //copy array 
console.log(n)
const a = {id:12,username:'helloween_us'}
const b = {...a}//copy object

//merging arrays
const old_students = ['Rohit','Sumit']
const new_students = ['Richa','Komal']
const all_students = [...old_students,...new_students]
console.log(all_students)

//mergin objects
const user = {
    name:'Abhinav sharma',
    age:20
}
const details = {
    phone:76345345,
    email:'hellwoeen@gmail.com'
}

const person = {...user,...details} //marged object
console.log(person)