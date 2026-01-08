//array methods for iteration
//forEach: iterate without return 
const persons  = ['Rohit','Shivam','Ranshi']
persons.forEach((person)=>{
    console.log(person)
})
//map: transform each element and make new array 
const person_uppercase = persons.map((person)=>{return person.toUpperCase()})
console.log(person_uppercase)
//filter: select elements by condition
const person_with_r_char = persons.filter((person)=>{
    return person.indexOf('R')!=-1
})
console.log(person_with_r_char)
//reduce: aggregate to single value
//syntax: array.reduce(callback, initial_value)
//example 1
const prices = [1,230,454,67,45,232]
const total = prices.reduce((total,price)=>{return total+price},0)
console.log(total)
//example 2
//count how many times each item appears in array
const accessories = ['Earphone','Charger','Headphone','Bluetooth','Earphone','Bluetooth','Charger','Charger','Earphone']
const count = accessories.reduce((obj,item)=>{
    obj[item]= (obj[item] || 0) + 1;
    return obj;
},{})
console.log(count)

/*

const accessories = ['Earphone','Charger','Headphone','Bluetooth','Earphone','Bluetooth','Charger','Charger','Earphone']

const count = accessories.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1
    return obj
}, {})


STEP 1: What reduce() does
-------------------------
reduce() loops through an array and reduces it to a single value.

array.reduce((accumulator, currentItem) => {
   // logic
   return accumulator
}, initialValue)

accumulator → collects the final result
currentItem → current element from array
initialValue → starting value of accumulator

In this code:
accumulator = obj      // an object
initialValue = {}      // empty object


STEP 2: First iteration
----------------------
item = 'Earphone'
obj = {}

Line executed:
obj[item] = (obj[item] || 0) + 1

Breakdown:
obj['Earphone'] → undefined
undefined || 0 → 0
0 + 1 → 1

Result:
obj = { Earphone: 1 }


STEP 3: Second iteration
-----------------------
item = 'Charger'
obj = { Earphone: 1 }

obj['Charger'] → undefined
(undefined || 0) + 1 → 1

Result:
obj = { Earphone: 1, Charger: 1 }


STEP 4: Third iteration
----------------------
item = 'Headphone'

obj['Headphone'] → undefined
(undefined || 0) + 1 → 1

Result:
obj = { Earphone: 1, Charger: 1, Headphone: 1 }


STEP 5: Repeated item case
-------------------------
item = 'Earphone' (again)

obj['Earphone'] → 1
(1 || 0) + 1 → 2

Later again:
(2 || 0) + 1 → 3

Result:
obj = { Earphone: 3, Charger: 1, Headphone: 1 }


STEP 6: Why (obj[item] || 0) works
---------------------------------
If key does not exist:
undefined || 0 → 0

If key exists:
number || 0 → number

This avoids writing if-else logic.


STEP 7: Why return obj is required
---------------------------------
reduce() needs the updated accumulator for the next iteration.
If obj is not returned, reduce() will break.


STEP 8: Final result after all iterations
-----------------------------------------
{
  Earphone: 3,
  Charger: 3,
  Headphone: 1,
  Bluetooth: 2
}

*/

//flattening array
//acc = accumulator
const nums = [[1,2],[3,4]]
const flatted = nums.reduce((acc,item)=>{return acc.concat(item)},[])
console.log(flatted)

//Grouping objects
const items = [{name:'Rohit',role:'admin'},{name:'Richa',role:'admin'},{name:'komal',role:'manager'}]
const groupedItems = items.reduce((acc,item)=>{
    acc[item.role] = acc[item.role] || []
    acc[item.role].push(item) 
    return acc
},{})

console.log(groupedItems)

/*
ORIGINAL CODE
-------------
const items = [
  { name: 'Rohit', role: 'admin' },
  { name: 'Richa', role: 'admin' },
  { name: 'komal', role: 'manager' }
]

const groupedItems = items.reduce((acc, item) => {
    acc[item.role] = acc[item.role] || []
    acc[item.role].push(item)
    return acc
}, {})


STEP 1: What reduce() does
-------------------------
reduce() iterates over the items array and converts it into a single value (here, an object).

array.reduce((accumulator, currentItem) => {
   // logic
   return accumulator
}, initialValue)

accumulator → acc (object used to group data)
currentItem → item (current object from array)
initialValue → {} (empty object)


STEP 2: First iteration
----------------------
item = { name: 'Rohit', role: 'admin' }
acc = {}

Line executed:
acc[item.role] = acc[item.role] || []

Breakdown:
item.role → 'admin'
acc['admin'] → undefined
undefined || [] → []

Now acc becomes:
{ admin: [] }

Next line:
acc[item.role].push(item)

Result:
{
  admin: [{ name: 'Rohit', role: 'admin' }]
}


STEP 3: Second iteration
-----------------------
item = { name: 'Richa', role: 'admin' }
acc = { admin: [ { name: 'Rohit', role: 'admin' } ] }

acc['admin'] already exists → use existing array
push item into it

Result:
{
  admin: [
    { name: 'Rohit', role: 'admin' },
    { name: 'Richa', role: 'admin' }
  ]
}


STEP 4: Third iteration
----------------------
item = { name: 'komal', role: 'manager' }

acc['manager'] → undefined
undefined || [] → []

push item

Result:
{
  admin: [
    { name: 'Rohit', role: 'admin' },
    { name: 'Richa', role: 'admin' }
  ],
  manager: [
    { name: 'komal', role: 'manager' }
  ]
}


STEP 5: Why acc[item.role] || [] is used
---------------------------------------
If the role key does not exist, create an empty array.
If it exists, reuse the existing array.
This avoids if-else checks.


STEP 6: Why return acc is required
---------------------------------
reduce() needs the updated accumulator for the next iteration.
Without returning acc, reduce() will fail.


STEP 7: Final result
-------------------
groupedItems =
{
  admin: [
    { name: 'Rohit', role: 'admin' },
    { name: 'Richa', role: 'admin' }
  ],
  manager: [
    { name: 'komal', role: 'manager' }
  ]
}


MENTAL MODEL
------------
"Create a bucket for each role and push matching items into it."
*/


//find : find first match
const users = [
    {id:1,name:'Rohit sing',age:14},
    {id:2,name:'richa',age:19},
    {id:3,name:'Abhi',age:23}
]
const found = users.find((item)=>{return item.age>18 })
console.log(found)
const found2 = users.findIndex((item)=>{return item.age>18})
console.log(found2)

console.clear() //just to clear the console
//some: check if any element matches
const hasAdult = users.some((item)=>item.age>18)
console.log(hasAdult)
//every: check if all element matches
const isAllAdult = users.every((item)=>item.age>18)
console.log(isAllAdult)