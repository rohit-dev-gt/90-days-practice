//methods to manipulate arrays
//in place
//push: adds element at the end of the array
const current_users = ['Rohit','Richa']
current_users.push('Komal')
console.log(current_users)
//pop: removes last element
current_users.pop()
console.log(current_users)
//shift: removes from start
current_users.shift()
console.log(current_users)
//unshift: add to start
current_users.unshift('Amit')
console.log(current_users)
//splice: add or remove elements anywhere in the array
current_users.splice(0,0,'Rohit singh')
console.log(current_users)
//slice: copy a portion of array
const phone  = '9555199515'
const show_phone = phone.slice(0,2) //starts from index 0 and add go upto index 1, 2 not included
console.log(show_phone)
//concat: merge arrays
const u1 = ['Rohit sing','Richa singh']
const u2 =['Komal singh']
const u = u1.concat(u2)
console.log(u)
//join: array to string
const users_string = current_users.join(', ')
console.log(users_string)
//split: string to array
const user_string_revert = users_string.split(', ')
console.log(user_string_revert)

console.clear()

//reverse(): in place
console.log(current_users)
current_users.reverse()
console.log(current_users)

//sort: sorting : numbers and string 
current_users.sort()
console.log(current_users)