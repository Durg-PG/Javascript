//Dates 

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);


let myCreatredDate = new Date(2024,0,29) // months starts with 0 (January)
console.log(myCreatredDate.toDateString());


let myCreatredDate2 = new Date("01-14-2024")
console.log(myCreatredDate2.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp.ge)