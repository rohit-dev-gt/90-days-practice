/* static methods do not require object to be accessed, they're directly accessed by class name  */
class CustomMethod{
    static add(a,b){
        return a+b
    }
}
console.log(CustomMethod.add(1212,43234))