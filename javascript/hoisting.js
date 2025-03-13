//hoisiting is a mechanism in which the declaration of variables and functions are moved to the top without variables initialization(niche initialize hoga). for let and const keyword both initialization and declaration are moved to the top
sayhello();
console.log(i);
function sayhello(){
    console.log("shivam");
}
var i=10;

/*VARIABLE SHADOWING*/
var i='mmm'; //agr yaha let hota var ki jgh to andr if wale me error ajata coz i already declare mana jata 
var h='hello';
if(true){
    var i='xxx';
    var h='hell';
    console.log(h);
    console.log(i);
}
console.log(h);
console.log(i);
// const keyword me humesha initialization honi chiye pr let keyword me undefined bhi run krega aur var keyword to global access deta hai ek trh se

/*var: Function-scoped, hoisted with undefined, can be re-declared.
let: Block-scoped, hoisted but not initialized, cannot be re-declared.
const: Block-scoped, hoisted but not initialized, cannot be re-declared, and cannot be reassigned.*/
