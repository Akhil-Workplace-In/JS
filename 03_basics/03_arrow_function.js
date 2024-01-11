const user = {
    username: "akhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}  

// user.welcomeMessage()

// user.username = "sam";

// user.welcomeMessage();

// user.welcomeMessage()
// console.log(this); // In browser context this refers to browser window object
                    // window is global object in browser
// function chai(){
//     const username = "akhil";
//     console.log(this.username);
// }

// chai();

//Arrow function

// const chai = function () {
//     console.log("hi there!");
// }

// chai()

// const chai = () => {
//     console.log("hi there");
//     console.log(this);
// }

// chai();

const addTwo = (num1, num2) => {
    return num1 + num2;  
}
// implicit return 

// const addTwoNum = (num1, num2) => num1+ num2;
// const addTwoNum = (num1, num2) => (num1+ num2);
const addTwoNum = (num1, num2) => ({username: "akhil"});

// console.log(addTwo(45, 45));
// console.log(addTwoNum(50, 50));




