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
    console.log(item.languageName);
} )