/* 
private properties can not be directly accessed by object, only class methods can access private fields (not called property). they declared with #
*/
class User{
    #password
    constructor(username,password){
        this.id = Math.round(Math.random()*1000000)
        this.username = username
        this.#password =password
    }
    checkPassword(password){
        return this.#password===password
    }
}
const u = new User('rohit_singh','Rohit@123')
//console.log(u)
//console.log(u.checkPassword('rohit@123'))
//u.#password //syntax error 