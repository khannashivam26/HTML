function cookMaggie(maggie,pani,pan){
    console.log("Your maggie will be ready in "+maggie*2 +" minutes "+"and Ingredients used are :-"+maggie+" packets of maggie "+maggie*2+" cups of water "+pan+" no of pans " )
};

cookMaggie(2,4,1);

let bread1=prompt("which bread would you like to have?");
let veggie1=prompt("which veggies would you like to have?");
let sauce1=prompt("which sauce would like you to have?");
function makeSandwich(bread,veggie,sauce){
    let sandwich=console.log(bread+" "+veggie+" "+sauce);
    return sandwich;
};

let readySandwich=makeSandwich(bread1,veggie1,sauce1);
console.log(readySandwich);

//paramaterized function
function books(name){
    console.log("this book name is "+ name);
}
books("harrypotter");

function addition(x,y){
    console.log(x+y);
}
addition(8,9); 
//OR
function addition(x,y){
    return x+y;
}
console.log(addition(8,9));
