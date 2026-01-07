const users = ['Rohit','abhi','john']

users.forEach(function(item,index,users){
    console.log(item)
})

const ages = [10,20,39,12,34]
const new_ages=  ages.find(item=>item>18) //always pick first match
console.log(new_ages)

const users2 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

//find from array of objects
const selected = users2.find((item)=>item.id==1)
console.log(selected)

//if no match found shows undefined
const selected2 = users2.find((item)=>item.id==11)
console.log(selected2)

//boolean checks
//some():atleast one match

const tourGroup = [
    {id:1,name:'Riya',age:10},
    {id:2,name:'Shimla',age:18},
    {id:3,name:'Shakshi',age:20},
]

const any_adult_in_group = tourGroup.some((person)=>person.age>18)
console.log(any_adult_in_group)

//every(): returns true of all element satisfy the condition

const students = [
    {id:1,name:'Laksh',marks:100},
    {id:1,name:'Komal',marks:90},
    {id:1,name:'Richa',marks:60},
]

const allMerit = students.every((student)=>student.marks>90)

console.log(allMerit)



/*
forEach	Loop / update
map	Transform
filter	Select
find	Single lookup
some	Any check
every	All check
reduce	Aggregate
*/

const employees = [
    {id:100,name:'Richa',role:'admin',active:true,age:19},
    {id:101,name:'Komal',role:'senior',active:true,age:24},
    {id:102,name:'Sanju',role:'junior',active:false,age:30},
    {id:103,name:'Anya',role:'manager',active:false,age:18},
    {id:104,name:'Keshav',role:'accountant',active:true,age:29},
]
//user management system
//list all employees
employees.forEach(function(employee){
    console.log(`${employee.name}`)
})

//mapping salary to ea
const updated_employees  = employees.map(function(employee){
    employee.salary = Math.round(Math.random(5)*100000)
    return employee
})
console.log(updated_employees)

//find young employees
const youngsters = employees.filter(function(employee){
    return employee.age<=20
})
console.log(youngsters)

//find a manager
const manager = employees.find((employee)=>employee.role=='manager')
console.log(manager)

//find if has any admin

const hasAdmin = employees.some((employee)=>employee.role=='admin')
console.log(hasAdmin)


//find if entire team is active
const allActive =  employees.every((employee)=>employee.active==true)
console.log(allActive)


//get number of active employees
const activeEmployeesNum = employees.reduce((count,employees)=>{
    return employees.active==true?count+1:count
},0)
console.log(activeEmployeesNum)
//get active admin only

//combined
const active_admin = employees.filter((employee)=>employee.active==true && employee.role=='admin').map((employee)=>employee.name)
console.log(active_admin)