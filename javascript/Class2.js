class Product{
    constructor(itemName){
        this.name=itemName;
    }
    getName(){
        return this.name + "is the profuct name";
    }
}
//creating a subclass (extending a class or inheritance)
class Label extends Product{
    constructor(name){
        super(itemName);//super main class ke constructor ko call krta hai 
    }
    getname(){
        return this.name+"is the label"
    }
}
let label=new Label();
console.log(label.getname())