// Singleton--Constructor//

const tinderUser = new Object() //--> Non-singleton Object

// const tinderUser = {} //--> Singleton Object
console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Durgesh";
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser ={  //--> Defining Objects under objects 
    email:"durg@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Pratik",
            lastname:"Swamiii"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}
const obj4 ={5: "a", 6: "b"}

// const obj3  = Object.assign({}, obj1,obj2,obj4) //-->{} helps to get the objects more clear and neat.(Target and Source)

// console.log(obj3);



// ++++++++++ Using Spread Operator +++++++++

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);



const Users = [
    {
    id: 1,
    email: "durg@persi.com"
},
{

},
{
},
{  
}
]

//Users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // Makes array of the object


//++++++++++++ Object Destructuring ++++++++++//

const course ={
    coursename : "Js in Hindi",
    price:"999",
    courseInstructor:"Hitesh"
}

// console.log(course.courseInstructor);

const{courseInstructor:Instructor} = course
console.log(Instructor);


//++++++++++++++++ API ++++++++++++++//

//JSON 
// {
//     name: "Durgesh",
//     coursename : "JS in Hindi",
//     price: 999
// }


