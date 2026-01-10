/* 
inheritance means when one class extends property of another class, there is parent class called base class and one child class who extends its property and methods
*/
class Product{
    constructor(name,price){
        this.name = name
        this.price = price
    }
    final_price(){
        return this.price
    }
    show_details(){
        return this.name
    }
}

class PhysicalProduct extends Product{
    constructor(name,price,weight,shipping_cost){
        super(name,price)
        this.weight = weight
        this.shipping_cost = shipping_cost
    }
    calc_delivery_charges(charges){
        this.delivery_charges = charges
    }
}
class DigitalProduct extends Product{
    constructor(name,price,file_size,download_link){
        super(name,price)
        this.file_size = file_size
        this.download_link = download_link
    }
    generate_download_access(){
        return this.download_link
    }
}

const book = new PhysicalProduct('Good habits of you',120,100,20)
book.show_details()
console.log(book)
console.log(book.show_details())

/* 
extends keyword defined which class is be to be extended
super() method calls parent class constructure
*/