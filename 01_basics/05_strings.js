const name = "akhil";
const repoCount = 50;

// console.log(name + repoCount + "value");

//back ticks `` 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('akhil-y');

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.charCodeAt('h'))
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 5);
// console.log(newString);

const anotherString = gameName.slice(0, 3);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.akhil.com/akhil%20";
console.log(url.replace('%20', '-'));

console.log(url.includes('yadav'));

const newName = "akhil-yadav-23";
console.log(newName.split(','))