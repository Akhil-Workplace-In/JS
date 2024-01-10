//Primitive data types
    // string, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const isOusideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 446546678465467461454n; 
// console.log(typeof bigNumber)   
//Reference data types (Non primitive)

    // Array, Objects, function
    // []    , {}    , ()

const heroes = ["shaktiman", "naagraj", "doga"];

const obj = {
    name: "akhil", 
    age: 23, 
    isSpeak: true
}

let sum = function(n1, n2){
    return n1 + n2;
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\


//Stack (primitive) , Heap (reference types)

