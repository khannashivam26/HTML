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
               
