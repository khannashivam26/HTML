const count=countincre();
const count1=countincre();
function countincre(){
    return{
        count:0,
        increment: function(){
            this.count++; // using this keyword helps to call this function with help of any object as it will make a call of the current object
            //beshk se mai count use kru ya count 1 increment krega agr this keyword use hoga
        }
    }
}
count1.increment();
count1.increment();
console.log(count1);


var x=0;
function incrementcounter(){
    this.x++; //this will refer to the funcion call(jo function present hoga)
}
incrementcounter();
incrementcounter();
incrementcounter();
console.log(x);

function Car(name){
    this.name=name;   //is function me jo name keyword hai usko point krega
    this.start=function(){
        console.log(this.name+' started');
        console.log(this);   //ye jo new object banaya hai car ka usko point krega as new keyword ekdm new instantiate kr deta hai
    }
}
let obj=new Car('swift'); // age new word use nhi krenge to wo windows object ko point krega jo global hai
obj.start();
