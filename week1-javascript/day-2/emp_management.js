//Employee management system
//simple crud operations
//add, edit, remove employees
//search employees
//group employees
//display employees

const employees = [] //array of employee objects
//employee object properties
/*
properties:id,name,email,phone,role,department,salary,status
methods: add(name,email,phone,role,department,salary), changeRole(id,role), changeDepartment(id,department), activate(id), deactivate(id),isActive(id), updateSalary(id,salary), getSummary() 
*/

//using classes
//Company: Swift Infocorp
class Employee{
    constructor(name,email,role,department,salary){
        this.id = Math.round(Math.random()*10000) //dynamic employee id
        this.name = name
        this.email = email
        this.role = role
        this.department = department
        this.salary = salary
        this.status = 'active' //default status
        employees.push(this)
    }
    changeRole(id,role){
        const index = employees.findIndex((emp)=>emp.id===id) //using findIndex method as its fast approach for for large datasets
        employees[index].role = role
    }
    changeDepartment(id,department){
        const index = employees.findIndex((emp)=>emp.id===id)
        employees[index].department = department
    }
    activate(id){
        const index = employees.findIndex((emp)=>emp.id===id)
        employees[index].status = 'active'
    }
    deactivate(id){
        const index = employees.findIndex((emp)=>emp.id===id)
        employees[index].status = 'inactive'
    }
    isActivate(id){
        const index = employees.findIndex((emp)=>emp.id===id)
        return employees[index].status
    }
    updateSalary(id,salary){
        const index = employees.findIndex((emp)=>emp.id===id)
        employees[index].salary = salary
    }
    getSummary(id){
        const index = employees.findIndex((emp)=>emp.id===id)
        return employees[index]
    }
    //just for showing all employees and this method is not object dependent, just can be call with directly class name, Employee.getAllEmployees()
    static getAllEmployees(){
        return employees
    }

}

const emp1 = new Employee('Rohit singh','rohitdevofficial@gmail.com','admin','Engineering',2500)
emp1.changeRole(emp1.id,'DevOps')

console.log(Employee.getAllEmployees())
