var c = 300;
// This comes under the Global Scope


// Everthing under the if statement is Block Scope
if (true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);