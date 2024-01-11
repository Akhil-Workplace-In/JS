// const tinderApp = new Object();

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com", 
    fullName: {
        usersFullname: {
            firstName: "akhil",
            lastName: "yadav"
        }
    }
}

// console.log(regularUser.fullName.usersFullname["firstName"]);
const obj1 = {
    1: "a",
    2: "b",
    3: "c", 
    4: "d"
}

const obj2 = {
    5: "e", 
    6: "f",
    7: "g", 
    8: "h"
}

// const obj3 = {obj1, obj2}

const obj3 = Object.assign(obj1, obj2)

const obj4 = Object.assign({}, obj1, obj2); // Object.assign

const obj5 = {...obj1, ...obj2}
// console.log(obj4);
// console.log(obj5);

const users = [
    {
        id: 1, 
        email: "akhil@gmail.com"
    }, 
    {

    }
];

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



//Destructuring

const course = {
    courseName: "js in hindi",
    coursePrice: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course;
const {courseInstructor: instructor} = course;  

// console.log(courseInstructor);
console.log(instructor)

//JSON

// {
//     "name": "akhil", 
//     "courseName": "js in hindi",
//     "price": "free"
// }