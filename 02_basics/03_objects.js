//singleton
//Object.create


//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "akhil",
    "full name": "akhil yadav",
    [mySym]: Symbol("myKey2"), 
    age: 22,
    email: "akhilworkplace@gmail.com", 
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser["name"], JsUser["isLoggedIn"], JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser["age"] = 21;

// Object.freeze(JsUser); // this won't allow to change any value in object

JsUser.email = "randomemail.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("hi, there");
// }

JsUser.greeting = function(){
    console.log(`Hello JS user ${this.name}`) //string interpolation => use backticks (``);
}

JsUser.greeting();


