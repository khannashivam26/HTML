const product={
    itemName:'Shampoo',
    price:900,
    discount:50,
    itemcode:'4AD'
}
//factory function 
function product_1(name,value,less,code){
    return{
    itemName:name,
    price:value,
    discount:less,
    itemcode:code
    }
}
let constan=product_1('shampoo',900,10,'4AD');
console.log(constan);

//constructor function 
function product_2(name,value,less,code){
    this.name=name,
    this.price=value,
    this.discount=less,
    this.code=code
    this.discountValue=function(){
        return less*value/100
    }
}
let constan2=new product_2('shampoo',400,10,'4AD');
console.log(constan2.discountValue())