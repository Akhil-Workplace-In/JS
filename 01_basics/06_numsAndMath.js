const score = 33;

// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2))

const otherBalance = 23.8966;

// console.log(otherBalance.toPrecision(3))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'))

// other number methods can be seen through browser window object 

// -----++++++++++++++++++++Math+++++++++++++++++++++++++----------

// console.log(Math);  

// console.log(Math.abs(-5))
// console.log(Math.round(4.555));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(5.4));

// console.log(Math.min(45, 12));
// console.log(Math.max(12, 56));

// console.log(Math.random()) => 0 -- 1

console.log(Math.random() * 10 + 1)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)