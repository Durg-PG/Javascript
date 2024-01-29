// Premitive Datatypes & Non Primitive 


//Primitive (Call by Value --> Changes happens in copy value)

//7 types : Strings , Number , Boolean , Null, Undefined ,Symbol(Unique), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemo = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')


console.log(id === anotherId);



//Refference Type(Non-Primitive)

// Arrrays,Objects, Functions

const heros =["shaktiman","naagraj","doga"];

let myobj = {
    name:"hitesh",
    age:23,

}


const myFunction = function(){
        console.log("Hello World");
}

console.log(typeof outSideTemo);
console.log(typeof myFunction);
console.log(typeof anotherId);

