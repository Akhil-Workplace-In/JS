//false values
const arr = [];
// false, 0, -0, BigInt 0n, "", null, NaN

// truthy
"0", 'false', " ", [], {}, function(){}

// if(arr.length === 0){
//     console.log("Array is Empty");
// }

const obj = {};

if(Object.keys(obj).length === 0){
    // console.log("Object is empty");
}


//Nullish Coalescing Operator (??) null , undefined

let val1;
// val1 = 5 ?? 10;

// val1 = null ?? 10;

// val1 = undefined ??  15

// val1 = null ?? 10 ?? 20;
// console.log(val1)

// Ternary operator

// condition ? true(true statement) : false 

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");