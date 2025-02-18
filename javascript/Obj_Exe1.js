//Q1)Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

let details=[
    {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }
]
for(let i=0;i<details.length;i++){
    if(details[i].readingStatus){
        console.log(details[i].title+" is written by "+details[i].author);
    }
    else{
        console.log("you have not read the book "+details[i].title+" written by "+details[i].author);
    }
}