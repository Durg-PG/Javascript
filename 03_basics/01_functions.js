// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }

// const result = addTwoNumbers(3,8)
// console.log("Addition is ",result);


function addTwoNumbers(num1 , num2){
    return num1 + num2
}

const result = addTwoNumbers(3,8)
console.log("Addition is ",result);


function loginUserMessage(username ="sam"){
    if(username === undefined){
        console.log("Please enter the Username");
    }else{
        return `${username} just logged In`
    }
}

console.log(loginUserMessage("Durgesh"));
// console.log(loginUserMessage(""));
console.log(loginUserMessage());


function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(100));

//----------------- REST Operatoe ----------///
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,500,550,333));


const user = {
    username:"Durgesh",
    price: 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)


// Arays
const myArr = [200,400,600]

function secondValue(getArr){
    return getArr[1]
}

console.log(secondValue(myArr));