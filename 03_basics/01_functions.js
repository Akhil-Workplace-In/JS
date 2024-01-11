

function sayMyName() {
    console.log("hi there!");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

addTwoNumbers(45, null)
function addTwoNumbers(number1, number2){
   return number1 + number2;
}

const result = addTwoNumbers(45, 45);
// console.log(result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter your user name...");
        return
    }
    return `${username} just logged in `
}   

// console.log(loginUserMessage("hitesh"));

function calculateCartPrice(val1, val2, ...num1){
    return num1;    

}

// console.log(calculateCartPrice(45, 45, 56, 89,  31633));

//Object
const user = {
    userName: "akhil",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Price is ${anyObject.price}`);

}

// console.log(handleObject(user));

// console.log(handleObject({
//     userName: "akhil",
//     price: 199
// }))

//Arrays 

const myNewArray = [200, 400, 500, 645];

function returnSecondValue(getArray){
    return getArray [1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 800, 500, 645]));