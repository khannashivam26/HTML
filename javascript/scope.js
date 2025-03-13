var x=0; //global scope
function first(){
    var x=1;
    console.log(x); // local scope (value bas {} ke andr tk hai iske bahar destroy hojaegi)
    function firstchild(){
        var x=2; // agr yaha sirf x hota to wo apne parent function ki value leta rather than global scope ki
        console.log(x);
    }
    firstchild(); //function call must to get output of function
}
first();
function second(){
    console.log(x); // global scope ki value le lega
}
second();

//block scope
// (always use let or const instead of var as var keyword treats variable as a global variable and its affects the block scope)
{
    let w=0;
}
console.log(w);

//lexical scope
//(kind of inheritance feature that parent function has access to child function properties but vice versa is not true)
function dada(){
    let name='shivam';
    console.log(likes); //this will give error as parent doesnt have the right to access properties of child but child has access to parents properties
    function papa(){
        console.log(name);
        function beta(){
            console.log(name);
            let likes='khanna';
        }
        beta();
    }
    papa();
}
dada();
