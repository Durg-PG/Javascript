name = "Durgesh"
myRepo = 50

// console.log("Hello I am " + name +" and my repo is " + myRepo);

console.log(`Hello my name is ${name} and my repo count is ${myRepo}`);

const gameName = new String("DurgeshFC")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.lastIndexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(2,4)
console.log(anotherString);

const newStringOne = "   durgesh   "
console.log(newStringOne);
// Removes additional spaces put by user
console.log(newStringOne.trim());



const url ="https:/durgesh.com/durgesh%20prabhugaonkar"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('amber'));


console.log(url.split('-'));




