//map function returns a new array wth execute a function on each element of the existed array, function not executed for empty elements, do not change original array
const users = ['rohit','mohit','shabin','',]
const makeCap = (ele)=>{return ele.toUpperCase()}
const profiles = users.map(makeCap)
console.log(profiles)
//filter: returns new array of elements who have passed the test provided by the fuction in filter method

const ages = [2,45,67,89,3,23]
const checkAge = (age)=>{if(age>60)return age}

const seniors = ages.filter(checkAge)
console.log(seniors)

//reduce: accumulate result from last call of the callback function
const collection = [200,300,453,654,775]

const totalCollection = (total,amount)=>{return  total+=amount }
console.log(collection.reduce(totalCollection))