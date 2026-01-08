//flat: flates a multi dimensional array
const md_array = [[1,2],[3,4]]
const md_flat = md_array.flat()
console.log(md_flat)

//flatMap(callback): map then flat
const md_users = ['Rohit','Komal']
const md_flatmap = md_users.flatMap((item)=>{return item.split('')})
console.log(md_flatmap)
//includes: check if item exists

const find_user = md_users.includes('Rohit') //Searching is case senstitive
console.log(find_user)

//indexOf: return the index if item presnet otherwise returns -1
//fill(): fills array with values , fill(value, start, end)
//used to make array with default values
//replaces in original array

const users = new Array(5).fill({userid:Math.round(Math.random()*999)})
console.log(users)