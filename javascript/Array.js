let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);
console.log(arr[arr.length-1]);
//another way to declare array using objects
const num=new Array(1,2,3,4,5,6,7,8,9); //here Array is the name of an object
console.log(num[num.length-1]);

//Push Element(add new element at the end)
num.push(10);

//Unshift(add new element at the beginning)
console.log(num.unshift(0));//this will print new array length 

//Pop (delete element from the end)
num.pop(10);

//shift (delete element from the beginning)
num.shift(0);
console.log(num);


const names=['shivam','aditya','aarav','daksh','ayush','rohan','piyush','pranjal','jatin','daksh'];
console.log(names);
console.log(names.indexOf('rohan')); //gives index of element of an array
console.log(names.indexOf('shiv')); //if there is no value related to array then it gives -1
console.log(names.indexOf('daksh'));// it will give only index of first occurence
console.log(names.indexOf('daksh',3));//it will check value after sepcified index
console.log(names.lastIndexOf('daksh')); //piche se first preference di jati hai bas index whi array ke hisb se hoga
console.log(names.includes('shivam'))//it gives whether its present or not by giving true or false

//for referenced data type we use find function
const names=[{
  name:"shivam khanna",
  salary:100000},
   { name:"bhavya khanna",salary:200000},
    { name:piyush khanna",salary:150000}];
console.log(names.find(function(element){
  return element.salary ===200000}));
//using arraow function
console.log(names.find((element) => { return element.salary===150000}));

//using concat method
let name1=['shivam','piyush','poorna'];
let name2=['bhavya','charu','vishu'];
let name3=name1.concat(name2);
let name3=[...name1,...name2] // using spread operator
console.log(name3);

//using slice method  syntax: .slice(start,end) if no start value specified it will take index 0 as start
let name4=name3.slice(2,4);
console.log(name4);

//for loop 
for(let i=0;i<name3.length;i++){
  console.log(name3[i]);
}
//for of
for(let name of name3){
  console.log(name)}
//for-each syntax: forEach(function(<string>,<int>){data})
name3.forEach(function(name,index){
console.log(name, index)
})
