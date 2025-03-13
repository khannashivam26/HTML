//Exercise 01
const Side={
    side:5,
    get area(){
       return this.side*this.side; // or we can use this.side**2(it gives exponent form)
}

}
Side.side=10;
console.log(Side.area);

//Exercise 02
function stringConcat(separator, ...strings) {
    let returnVal = '';
    strings.forEach((string, i) => { //forEach is a method that is use to traverse for each element 
        returnVal += string;
        if (i < strings.length - 1) {
            returnVal += separator; // Add separator only between strings, not after the last one
        }
    });
    return returnVal;
}

console.log(stringConcat('+', 'sss', 'xxx', 'yyy'));

//Exercise 03
const num=[1,2,3,4,5,6];
const [first,second,third,...rest]=num; 
/*aother way
const[first,second,third,rest]=[1,2,3,4,5,6]*/
console.log(first);
console.log(second);
console.log(third);
console.log(rest);

const obj={
    name:'aakash',
    age:46,
    gender:'female'
}
const {name,age}= obj ;
console.log(name);
console.log(age); 

//Exercise 04
function MatchstickHouse(houses){
    if(houses<=0){
        return ;
    }else {
        return houses*6 - houses + 1;
    }
}
console.log(MatchstickHouse(4));
