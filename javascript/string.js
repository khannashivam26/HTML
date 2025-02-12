let str="shivam";
let str1='shivam';
// strimg can be written in single or double quotes
console.log(str); 
console.log(str1);

//escape in string

let str2='You have'nt enter you age'; 
//this gives an error to avoid this we use escape string by adding backslash(\)
 let str3='you have\'nt enter your age correctly';
 console.log(str3);

 //concatination of strings
 let str4="shivam ";
 let str5="khanna";
 let Str=console.log(str4+str5);

 //conversion of string data to number data and vice-versa
 let str6="123";
let number=Number(str6);             // string se number me hogya
 console.log(number);

  let number1=number.toString(); 
  console.log(number1);             //number se string me hogya

  //for template literals and multiline string use backticks (``)for strings
  let str7=`shivam
  khanna
  roll no 32`;
  console.log(str7);

  //FUNCTIONS IN STRINGS
  let string="my name is shivam khanna and i'm from delhi";
  console.log(string.length);  //tells the length of string
  console.log(string[35]); // tells letter at specific index
  console.log(string.indexOf("and")); //tells the position of word/letter
  console.log(string.slice(10,20)); //specified index ke hisab se utna part slice krke output kr dega
  console.log(string.toUpperCase()); //uppercase me kr dega
  console.log(string.toLowerCase()); //lowercase me kr dega
  
