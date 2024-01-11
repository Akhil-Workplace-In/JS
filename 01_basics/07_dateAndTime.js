let myDate = new Date();

// console.log(myDate.toDateString());

// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)


// let myCreatedDate = new Date(2024, 0, 11);
// let myAnotherDate = new Date(2024, 0, 11, 9, 26)
let myCreatedDate = new Date("2024-01-11");
// console.log(myAnotherDate.toLocaleString())
// console.log(myCreatedDate.toLocaleString());

// Time stamp

let myTimeStamp = Date.now()
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date();

let d = newDate.toLocaleString('defaut', {
    weekday: "long",
    
})

console.log(d)
