//for of

// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//     console.log(element);
// }

// let str = "akhil";
// for (const char of str){
    
//     console.log(char);
// }

// Map Object
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("IN", "India");
console.log(map);

for (const [key, value] of map){ //destructure of array
    console.log(key, ':-', value);
}

const myObject = {
    game: 'NFS', 
    game2: 'Spiderman'
}

for (const [key, value] of myObject){
    console.log(`${key} :- ${value}`)
}