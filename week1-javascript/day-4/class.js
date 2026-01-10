/* class binds property and methods of object together, its blueprint */
class Person{
    constructor(name){
        this.name = name
    }
    //constructor initialize an object

    //instance method
    intro(){
        console.log(`Hello, i am ${this.name}`)
    }

    //name is instance/object's property
}

const p = new Person('Rohit singh')
p.intro()
