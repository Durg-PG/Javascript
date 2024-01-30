// Singleton and Object Literals 

// Object Literals 
const mySym = Symbol("key1")


const JsUser = {
    name: "Durgesh",
    "full name": "Durgesh Prabhugaonkar",
    [mySym]:"mykeys",
    age: 23,
    location:"Pune",
    email:"durgeshpg@gmail.com",
    isLogedIn: false,
    lastLoginDays: ["Mondays","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
//console.log(typeof(JsUser[mySym]));

JsUser.email = "duregsh@chatgpt.com"
//Object.freeze(JsUser)

JsUser.email = "durg@microsoft.com"
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello Js User");
}

console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greetingTwo());
