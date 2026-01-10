/* Method overriding means, override a method of parent class, a child class may have a function with same name as parent but with different functionality */
class Employee{
    constructor(name){
        this.name = name
    }
    getSalary(){
        return 'Base Salary'
    }
}

class Manager extends Employee{
    constructor(name){
        super(name)
    }
    getSalary(){
        return 'Base Salary  + Bonus'
    }
}

const e1 = new Manager('Rohit singh')

console.log(e1.getSalary())