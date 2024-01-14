const coding = ["js", "rb", "java", "python", "cpp"];

// coding.forEach(function (element){
//     console.log(element);
// } )

// coding.forEach((value) => {console.log(value)})

// coding.forEach(printMe);
// function printMe(item){
//     console.log(item);
// }

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFile: "js"
    },
    {
        languageName: "JAVA",
        languageFile: "java"
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
]

myCoding.forEach((item) => {
    // console.log(item.languageName);
} )

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 5;
// });
// console.log(newNums)

// const newNums = [];
// myNums.forEach((num) => {
//     if(num > 5){
//         newNums.push(num);
//     }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004}, 
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008}
]
// const userBooks = books.filter((book) => book.genre === "Fiction");
// console.log(userBooks);

const userBooks = books.filter((book) => {return book.publish > 1990} );
console.log(userBooks);