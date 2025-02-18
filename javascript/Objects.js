const course={
    lecture:10,
    section:3,  
    title:'javascript',
    notes:{
        introduection:'Welcome to JS course'
    },
    enroll(){ 
        console.log("you are successgfully stored ");
    }
}
course.enroll();
console.log(course.title);
course.price=999;
//dynamic in nature (bahar se bhi hum add on kr skte hai chize)
console.log(course);

//Factorial Function
function createcourse(){
    return{
        lecture:10,
        section:3,  
        title:'javascript',
        notes:{
            introduection:'Welcome to JS course'
        },
        enroll(){ 
            console.log("you are successgfully stored ");
        }
    }
    
}
const course=createcourse();
course.title;

//Constructor Function
function Course(title){
    this.title=title;
    this.enroll=function(){
        console.log('you are enrlled');
    }
}
delete course.title; // to delete the property of anobject
const course=new Course('javaascript');
console.log(course);

//Primitive Datatype
let number=10;
//Pass by Value
let number_2=number;
number=15;
console.log(number);
console.log(number_2);  

//Reference Datatype
let num={number:10};
//Pass by reference
let num_2=num;

num.number=15;
console.log(num); 
console.log(num_2); 

//to clone(copy) data of one abject into another object
function Course(title){
    this.title=title;
    this.enroll=function(){
        console.log('you are enrlled');
    }
}
const course=new Course('javaascript');
const cousre_1={...course};
//another method of copying data from any object or multiples object at a same time
const book={
    title:'javascript is a language',
    enroll(){
        console.log=('hello my name is ...')
    }
}
const book_1=Object.assign({},book);//this book object data will be copied in empty object literal and it is overall copied in book_1 


console.log(course_1);
for(let key in course){
    console.log(key,course[key]);
}
for(let value of Object.keys(course)){
    console.log(value);
}

//to get length of an object 
Object.keys(ObjectName).length