class Product{
    //default constructor
    constructor(name,price, discount,code){
        this.itemName=name,
        this.price=price,
        this.discount=discount,
        this.itemCode=code
    }
}
const Product1= new Product('shampoo',700,15,'F10');
console.log(Product1);
//method 2
const Product2=class{
    constructor(name,price, discount,code){
        this.itemName=name,
        this.price=price,
        this.discount=discount,
        this.itemCode=code
    }
    //getter and setter
    get getDiscountvalue(){
        return discount;
    }
    set setDiscountvalue(value){
        this.price=value;
    }
   DiscountValue(){
        return this.discount*this.price/100;
    }
}
let pencil=new Product2('shampoo',650,20,'c10')
console.log(pencil);
console.log(pencil.DiscountValue());