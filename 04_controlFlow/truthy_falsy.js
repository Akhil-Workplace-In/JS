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
    console.log("Object is empty");
}