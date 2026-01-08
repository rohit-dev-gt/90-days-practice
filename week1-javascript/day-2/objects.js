const user = {userid:111,username:'dev_int'}
//Object.keys(obj): gets keys of object
console.log(Object.keys(user))
//Object.values(obj): gets vlaues of the object
console.log(Object.values(user))
//Object.entries(obj): gets array of [key,value] pair
console.log(Object.entries(user))
//[ [ 'userid', 111 ], [ 'username', 'dev_int' ] ]

const details = {email:'rohitdevofficial@gmail.com'}
//Object.assign(target,source): marge objects in place
console.log(Object.assign(user,details))
//Oject.freez(obj): freez object, no mutation possible, no change/add/remove of keys and value
user.userid = 123
Object.freeze(user)
user.userid=9999 //no change
console.log(user)
//Object.seal(obj): prevent add or delete properties

//Computed property names: {[key]: value}
const key = 'name'
const obj = {[key]:'Rohit sing'}
console.log(obj)

//Shorthand properties

const name = 'Rohit singh kashypa';
const age = 20
const u = {name,age} //if key and value variable has same name then we can write them once 
//Method shorthand

const v = {method(){}} //if method name is same as keyname we can directly add method 



