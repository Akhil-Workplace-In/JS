//for 

// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }
//Table Print
// for(let i = 1; i <= 10; i++){
//     // console.log(`Outer loop value: ${i}`);
//     console.log("Table of: " + i + " =>");
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner loop value: ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + "=" + (i * j));
//     }
// }

// Array 
let myArray = ["flash", "batman", "superman"];

for(let i = 0; i < myArray.length; i++){
    // console.log(myArray[i]);
}

// break and continue

// for(let index = 0; index <= 20; index++){
//     if(index == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of index is ${index}`);
// }

//continue

for(let index = 0; index <= 20; index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of index is ${index}`);
} 