//For loop
for(let i=0;i<10;i++){
    console.log("Hello");
}

//while loop
let i=0;
while(i<10){
    console.log("HELLO");
    i++;
}

//do.....while loop
let j=0;
do{
    console.log("HeLLo");
    j++
}while(j<10);

//for...in loop
/*Object*/
let animal={
    name:"Shivam",
    val:4
};
for(let key in animal){
    console.log(key,animal[key]); //object ke sb keys print hongi with values baar baar hume ek ek key ko prnt nhi krwana hoga
}
//arrays
let names=["shivam","piyush","bhavya"];
for(let index in names){
    console.log(index,names[index]);
}
 
//for....of 
for(let name of names){  // direct value de dega index ki bina index ka use kre
    console.log(name);
}
