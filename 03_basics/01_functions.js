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


