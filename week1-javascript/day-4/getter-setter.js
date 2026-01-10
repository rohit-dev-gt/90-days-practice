class User{
    constructor(name,email){
        this.id = Math.round(Math.random()*10000)
        this.name = name
        this.email = email
    }
    setName(name){
        return this.name = name
    }
    setEmail(email){
        return this.email = email
    }
    
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
}

const u1 = new User('Rohit singh kashyap','rohitdevofficial@gmail.com')
console.log(u1)

u1.setName('Rohit kashyap')
console.log(u1.getName())